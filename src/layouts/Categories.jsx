import CategoryCard from '../components/CategoryCard';
import './Categories.css';

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: 'Планети',
      icon: 'icons/planets.png',
      description:
        "Дізнайтеся про планети Сонячної системи та екзопланети. Відкрийте характеристики, склад, орбіти та унікальні особливості від кам'янистих планет до газових гігантів.",
      image: 'images/planets.jpg',
      imagePosition: 'left',
    },
    {
      id: 2,
      name: 'Зорі',
      icon: 'icons/stars.png',
      description:
        'Вивчайте зірки: їх класифікацію, стадії еволюції, від народження в туманностях до вибухів наднових. Дізнайтесь про різноманітність зоряного світу.',
      image: 'images/stars.jpg',
      imagePosition: 'right',
    },
    {
      id: 3,
      name: 'Галактики',
      icon: 'icons/galaxies.png',
      description:
        'Пориньте у світ галактик: спіральних, еліптичних, неправильних. Дізнайтесь про Чумацький Шлях, сусідні галактики та далекі скупчення.',
      image: 'images/galaxies.jpg',
      imagePosition: 'left',
    },
    {
      id: 4,
      name: 'Чорні діри',
      icon: 'icons/black-holes.png',
      description:
        "Досліджуйте загадкові чорні діри, нейтронні зірки та інші екзотичні об'єкти Всесвіту. Дізнайтесь про їх природу та вплив на простір-час.",
      image: 'images/blackholes.png',
      imagePosition: 'right',
    },
    {
      id: 5,
      name: 'Космічні явища',
      icon: 'icons/comet.png',
      description:
        'Вивчайте неймовірні космічні явища: квазари, пульсари, гамма-сплески та інші вражаючі феномени глибокого космосу.',
      image: 'images/cosmic-phenomena.jpg',
      imagePosition: 'left',
    },
    {
      id: 6,
      name: 'Місії та апарати',
      icon: 'icons/missions.png',
      description:
        'Дізнайтесь про космічні місії, телескопи, зонди та інші апарати, що досліджують навколишній нас Всесвіт.',
      image: 'images/missions.png',
      imagePosition: 'right',
    },
  ];

  return (
    <section className="categories">
      <div className="categories-container">
        <h2 className="categories-title">Категорії</h2>
        <div className="categories-list">
          {categories.map((category) => (
            <div key={category.id}>
              <CategoryCard
                name={category.name}
                description={category.description}
                icon={category.icon}
                image={category.image}
                imagePosition={category.imagePosition}
              />
              {<div className="category-divider" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
