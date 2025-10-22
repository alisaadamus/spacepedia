import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Input from '../components/Input';
import Button from '../components/Button';
import './Auth.css';

const SignUp = () => {
  return (
    <>
      <Header />
      <main className="auth-main">
        <div className="auth-container">
          <div className="auth-card">
            <h2 className="auth-title">Реєстрація</h2>
            <form className="auth-form">
              <Input placeholder="Email..." type="email" />
              <Input placeholder="Логін..." type="text" />
              <Input placeholder="Пароль..." type="password" />
              <Input placeholder="Підтвердження пароля..." type="password" />
              <Button type="submit" className="auth-button">
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
