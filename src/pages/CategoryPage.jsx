import Articles from '../layouts/Articles';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';
import Hero from '../layouts/Hero';

const CategoryPage = () => {
  const categoryData = {
    title: 'Планети',
    description:
      "Досліджуйте різноманіття планет нашої Сонячної системи та за її межами. Від кам'янистих внутрішніх планет до газових гігантів та таємничих екзопланет.",
  };

  return (
    <>
      <Header />
      <main>
        <Hero
          title={categoryData.title}
          description={categoryData.description}
        />
        <Articles />
      </main>
      <Footer />
    </>
  );
};

export default CategoryPage;
