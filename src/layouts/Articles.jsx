import ArticleCard from '../components/ArticleCard';
import Button from '../components/Button.jsx';
import Input from '../components/Input.jsx';
import './Articles.css';

const Articles = () => {
  const articles = [
    {
      id: 1,
      title: 'Марс: Червона планета',
      description:
        'Марс, відомий як Червона планета, є четвертою планетою від Сонця та однією з найбільш вивчених планет в нашій Сонячній системі. З своїми полярними шапками, сезонними змінами та слідами давньої водної активності, Марс продовжує привертати увагу вчених та дослідників. Сучасні місії, такі як Perseverance та Curiosity, надають безцінні дані про геологію, клімат та потенційну можливість мікробного життя в минулому.',
      image: 'images/mars.jpg',
      imagePosition: 'left',
      readTime: '8 хв',
    },
    {
      id: 2,
      title: 'Венера: Сестра Землі',
      description:
        'Венера, часто називана сестрою Землі через подібні розміри та масу, є другою планетою від Сонця та найгарячішою планетою в нашій Сонячній системі. Її поверхня розігріта до температур понад 460°C завдяки потужному парниковому ефекту, викликаному щільною атмосферою з вуглекислого газу та хмар сірчаної кислоти.',
      image: null,
      imagePosition: 'none',
      readTime: '7 хв',
    },
    {
      id: 3,
      title: 'Екзопланети: Світи за межами',
      description:
        "Екзопланети - це планети, що обертаються навколо інших зірок, ніж наше Сонце. Відкриття першої екзопланети в 1992 році відкрило нову еру в астрономії та поставило питання про унікальність нашої Сонячної системи та існування життя поза Землею. За допомогою таких телескопів як Kepler та TESS, астрономи виявили тисячі екзопланет різних типів: від газових гігантів, подібних до Юпітера, до кам'янистих планет земного типу в зоні, придатній для життя.",
      image: 'images/exoplanets.jpg',
      imagePosition: 'right',
      readTime: '10 хв',
    },
    {
      id: 4,
      title: 'Сатурн та його кільця',
      description:
        "Сатурн, шоста планета від Сонця, найбільш відома своєю вражаючою системою кілець, що робить її одним з найкрасивіших об'єктів в нашій Сонячній системі. Кільця Сатурна складаються з мільярдів частинок льоду, пилу та гірських порід розміром від мікроскопічних часток до декількох метрів. Місія Cassini-Huygens надала безпрецедентні дані про структуру кілець, їх динаміку та взаємодію з численними супутниками планети. ",
      image: null,
      imagePosition: 'none',
      readTime: '9 хв',
    },
  ];

  return (
    <section className="articles">
      <div className="articles-container">
        <h2 className="articles-title">Статті</h2>
        <div className="articles-controls">
          <div className="search-container">
            <Input placeholder="Пошук..." />
          </div>
          <div className="sorting-controls">
            <Button>Фільтри</Button>
            <Button>Назва ↑↓</Button>
            <Button>Тривалість вивчення ↑↓</Button>
          </div>
        </div>

        <div className="articles-list">
          {articles.map((article, index) => (
            <div key={article.id}>
              <ArticleCard
                title={article.title}
                description={article.description}
                image={article.image}
                imagePosition={article.imagePosition}
                readTime={article.readTime}
              />
              {index < articles.length - 1 && (
                <div className="article-divider"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
