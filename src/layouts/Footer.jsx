import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-copyright">©2025 Spacepedia</div>

        <div className="footer-links">
          <span>Планети</span>
          <span>Зорі</span>
          <span>Галактики</span>
          <span>Чорні діри</span>
          <span>Космічні явища</span>
          <span>Місії та апарати</span>
        </div>

        <div className="footer-contacts">
          <div>+380968070605</div>
          <div>alisa.adamus@student.uzhnu.edu.ua</div>
          <div>t.me/example</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
