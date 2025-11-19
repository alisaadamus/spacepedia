import { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import { useAuth } from '../context/AuthContext';
import './Auth.css';

const SignUp = () => {
  const { register, isLoading, error, success } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    login: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(formData);
      setTimeout(() => {
        window.location.href = '/';
      }, 1500)
    } catch (error) {
      console.error('Registration error:', error);
    }
  };


  return (
    <>
      <main className="auth-main">
        <div className="auth-container">
          <div className="auth-card">
            <h2 className="auth-title">Реєстрація</h2>
            <form className="auth-form" onSubmit={handleSubmit}>
              <Input
                name="email"
                placeholder="Email..."
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Input
                name="login"
                placeholder="Логін..."
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
              <Input
                name="confirmPassword"
                placeholder="Підтвердження пароля..."
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              {error && <div className="auth-error">{error}</div>}
              {success && <div className="auth-success">{success}</div>}
              <Button type="submit" className="auth-button" disabled={isLoading}>
                Зареєструватися
              </Button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default SignUp;
