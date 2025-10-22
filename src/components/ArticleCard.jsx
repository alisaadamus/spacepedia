import './ArticleCard.css';
import Button from './Button.jsx';

const ArticleCard = ({
  title,
  description,
  image,
  imagePosition = 'none',
  readTime,
}) => {
  const hasImage = image && imagePosition !== 'none';

  return (
    <article className="article-card">
      <div
        className={`article-card-inner ${hasImage ? 'article-card-with-image' : ''} ${imagePosition === 'right' ? 'article-card-right' : ''}`}
      >
        <div className="article-content">
          <div className="article-header">
            <h3 className="article-title">{title}</h3>
          </div>
          <p className="article-description">{description}</p>
          <div className="article-footer">
            <span className="article-time">{readTime}</span>
            <Button>Перейти →</Button>
          </div>
        </div>

        {hasImage && <img src={image} alt={title} className="article-image" />}
      </div>
    </article>
  );
};

export default ArticleCard;
