import ArticlePage from './pages/ArticlePage';
import CategoryPage from './pages/CategoryPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import SignUpPage from './pages/SignUpPage';
const currentPage = 'main';

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
