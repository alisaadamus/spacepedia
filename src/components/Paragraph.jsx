import './Paragraph.css';

const Paragraph = ({
  children,
  image,
  imagePosition = 'left',
  imageAlt = '',
  imageOnly = false,
}) => {
  if (imageOnly) {
    return (
      <div className="paragraph paragraph-image-only">
        <div className="paragraph-inner">
          <img src={image} alt={imageAlt} className="paragraph-image" />
        </div>
      </div>
    );
  }

  if (image) {
    return (
      <div
        className={`paragraph paragraph-with-image paragraph-${imagePosition}`}
      >
        <div className="paragraph-inner">
          <div className="paragraph-content">
            {children && <p>{children}</p>}
          </div>
          <img src={image} alt={imageAlt} className="paragraph-image" />
        </div>
      </div>
    );
  }

  return (
    <div className="paragraph">
      <div className="paragraph-inner">
        <p>{children}</p>
      </div>
    </div>
  );
};

export default Paragraph;
