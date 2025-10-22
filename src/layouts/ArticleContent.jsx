import Button from '../components/Button';
import Paragraph from '../components/Paragraph';
import './ArticleContent.css';

const ArticleContent = () => {
  return (
    <div className="article-content-wrapper">
      <header className="article-header">
        <h1 className="article-title">Сатурн та його кільця</h1>
      </header>

      <div className="article-content">
        <Paragraph>
          Сатурн — шоста за віддаленістю планета від Сонця і друга за розміром у
          Сонячній системі. Це газовий гігант, який складається переважно з
          водню та гелію. Сатурн є найбільш віддаленою від Землі планетою, що
          була відкрита неозброєним оком ще в давні часи.
        </Paragraph>

        <Paragraph
          image="images/saturn-rings.webp"
          imagePosition="left"
          imageAlt="Кільця Сатурна"
        >
          Радіус Сатурна лише на 16 % менше радіуса Юпітера, але його маса
          становить менш ніж третину маси Юпітера. Водночас його маса більша за
          земну в 95 разів, а радіус більший в 9,5 раза, але магнітне поле трохи
          слабше за земне. Планета обертається навколо Сонця на відстані 9,58
          астрономічної одиниці (1434 млн км), з орбітальним періодом 29,45
          року.
        </Paragraph>

        <Paragraph
          image="images/saturn.jpg"
          imageAlt="Повний вид Сатурна"
          imageOnly={true}
        />

        <Paragraph>
          Сатурн швидко обертається навколо своєї осі (з періодом — 10,65
          години), складається переважно з рідкого водню і гелію, має товстий
          шар атмосфери. В атмосфері Сатурна міститься 94 % водню і 6 % гелію
          (за об'ємом). Унікальна система кілець робить Сатурн одним з
          найвпізнаваніших об'єктів нашої Сонячної системи.
        </Paragraph>

        <Paragraph
          image="images/saturn-storm.jpg"
          imagePosition="right"
          imageAlt="Буря на Сатурні"
        >
          Кільця Сатурна складаються з мільярдів крижаних частинок розміром від
          мікроскопічних кристалів до гігантських глыб. Вчені вважають, що
          кільця могли утворитися в результаті руйнування супутників під впливом
          гравітаційних сил або зіткнення комет з супутниками планети.
        </Paragraph>

        <div className="article-video">
          <div className="video-inner">
            <div className="video-container">
              <iframe
                width="100%"
                src="https://www.youtube.com/embed/5KcKuD-7tCk?si=17NY9zdLe3VOId3h"
                title="Сатурн та його кільця"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="article-navigation">
        <Button variant="ghost">← Попередня</Button>
        <Button>Наступна →</Button>
      </div>
    </div>
  );
};

export default ArticleContent;
