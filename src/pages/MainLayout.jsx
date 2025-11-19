import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';

const MainLayout = () => {
  const location = useLocation();
  const hideFooter = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      {!hideFooter && <Footer />}
    </>
  );
};

export default MainLayout;
