import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { AuthProvider } from './context/AuthContext';
import ArticlePage from './pages/ArticlePage';
import CategoryPage from './pages/CategoryPage';
import LoginPage from './pages/LoginPage';
import MainLayout from './pages/MainLayout';
import MainPage from './pages/MainPage';
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter basename="/spacepedia">
        <ScrollToTop />
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/category" element={<CategoryPage />} />
            <Route path="/article" element={<ArticlePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />

            <Route path="*" element={<h1 style={{ textAlign: "center", marginTop: "2rem" }}>404 — Сторінку не знайдено</h1>} />
          </Route>

        </Routes>

      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
