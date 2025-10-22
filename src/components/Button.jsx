import './Button.css';

const Button = ({ children, onClick, disabled = false, type = 'button' }) => {
  return (
    <button
      type={type}
      className={`btn ${disabled ? 'btn-disabled' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
