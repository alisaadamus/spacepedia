import Categories from '../layouts/Categories.jsx';
import Footer from '../layouts/Footer.jsx';
import Header from '../layouts/Header.jsx';
import Hero from '../layouts/Hero.jsx';

function MainPage() {
  return (
    <>
      <Header />
      <main>
        <Hero
          title="Welcome to Spacepedia"
          description="Spacepedia — це всеосяжний космічний довідник, створений для ентузіастів астрономії, студентів та науковців. Тут ви знайдете детальну інформацію про планети Сонячної системи, зірки, галактики та загадкові космічні явища."
          isMainPage={true}
        />
        <Categories />
      </main>
      <Footer />
    </>
  );
}

export default MainPage;
