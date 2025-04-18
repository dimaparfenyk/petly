import css from "./_Button.module.scss";

const Button = ({ text, type = "button", isActive, onClick, children }) => {
  return (
    <button
      type={type}
      className={`${css.button} ${isActive ? css.active : ""}`}
      onClick={onClick}
    >
      {text}
      {children}
    </button>
  );
};

export default Button;
