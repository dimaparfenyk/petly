import css from "./_Wrapper.module.scss";

const Wrapper = ({ children }) => {
  return <div className={css.wrapper}>{children}</div>;
};

export default Wrapper;
