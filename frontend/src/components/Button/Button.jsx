import css from "./_Button.module.scss";

const Button = ({ text, type = "button", children }) => {
  return (
    <button type={type} className={css.button}>
      {children}
      {text}
    </button>
  );
};

export default Button;
