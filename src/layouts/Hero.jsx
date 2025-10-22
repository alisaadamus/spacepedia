import './Hero.css';

const Hero = ({ title, description, isMainPage = false }) => {
  return (
    <section className="hero">
      <div>
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
      </div>
      <div className="hero-container">
        <h1 className="hero-title">{title}</h1>
        <div className="hero-content">
          <p className="hero-description">{description}</p>
          {isMainPage && (
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">100+</div>
                <div className="stat-label">Статей</div>
              </div>
              <div className="stat">
                <div className="stat-number">50+</div>
                <div className="stat-label">Категорій</div>
              </div>
              <div className="stat">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Оновлення</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
