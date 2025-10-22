import Button from './Button.jsx';
import './CategoryCard.css';

const CategoryCard = ({
  name,
  description,
  icon,
  image,
  imagePosition = 'left',
}) => {
  return (
    <div className={`category-card category-card-${imagePosition}`}>
      <div className="category-content">
        <div className="category-header">
          <img src={icon} alt="" />
          <h3 className="category-name">{name}</h3>
        </div>
        <p className="category-description">{description}</p>
        <Button>Перейти →</Button>
      </div>
      <div>
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default CategoryCard;
