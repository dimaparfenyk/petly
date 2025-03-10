import css from "./_Container.module.scss";

const Container = ({ children, className = "" }) => {
  return <div className={`${css.container} ${css[className]}`}>{children}</div>;
};

export default Container;
