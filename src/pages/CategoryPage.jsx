import Articles from '../layouts/Articles';
import Hero from '../layouts/Hero';

const CategoryPage = () => {
  const categoryData = {
    title: 'Планети',
    description:
      "Досліджуйте різноманіття планет нашої Сонячної системи та за її межами. Від кам'янистих внутрішніх планет до газових гігантів та таємничих екзопланет.",
  };

  return (
    <>
      <main>
        <Hero
          title={categoryData.title}
          description={categoryData.description}
        />
        <Articles />
      </main>
    </>
  );
};

export default CategoryPage;
