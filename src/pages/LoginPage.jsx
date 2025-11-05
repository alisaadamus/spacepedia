import { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import { useAuth } from '../context/AuthContext.jsx';
import Header from '../layouts/Header';
import './Auth.css';

const LoginPage = () => {
  const { login, isLoading, error, success } = useAuth();
  const [formData, setFormData] = useState({
    login: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    try {
      const result = await login(formData);
      console.log('Login successful:', result);
      setTimeout(() => {
        window.location.href = '/';
      }, 1500);
    } catch (error) {
      console.error('Login error:', error)
    }
  };

  return (
    <>
      <Header />
      <main className="auth-main">
        <div className="auth-container">
          <div className="auth-card">
            <h2 className="auth-title">Авторизація</h2>
            <form className="auth-form" onSubmit={handleSubmit}>
              <Input
                name="login"
                placeholder="Логін або email..."
                type="text"
                value={formData.login}
                onChange={handleChange}
                required
              />
              <Input
                name="password"
                placeholder="Пароль..."
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              {error && <div className="auth-error">{error}</div>}
              {success && <div className="auth-success">{success}</div>}
              <Button type="submit" className="auth-button" disabled={isLoading}>
                Увійти
              </Button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default LoginPage;
