import './Input.css';

const Input = ({ placeholder, type = 'text' }) => {
  return (
    <input type={type} className="custom-input" placeholder={placeholder} />
  );
};

export default Input;
