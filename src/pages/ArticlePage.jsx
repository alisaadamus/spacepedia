import ArticleContent from '../layouts/ArticleContent';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';

const ArticlePage = () => {
  return (
    <>
      <Header />
      <main>
        <ArticleContent />
      </main>
      <Footer />
    </>
  );
};

export default ArticlePage;
