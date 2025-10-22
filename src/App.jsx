import ArticlePage from './pages/ArticlePage';
import CategoryPage from './pages/CategoryPage';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
const currentPage = 'login';

function App() {
  return (
    <>
      {currentPage === 'main' && <MainPage />}
      {currentPage === 'category' && <CategoryPage />}
      {currentPage === 'article' && <ArticlePage />}
      {currentPage === 'login' && <LoginPage />}
      {currentPage === 'signup' && <SignUpPage />}
    </>
  );
}

export default App;
