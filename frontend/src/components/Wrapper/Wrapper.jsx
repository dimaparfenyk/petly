import clsx from "clsx";
import css from "./_Wrapper.module.scss";

const Wrapper = ({ children, newClass = "" }) => {
  return <div className={clsx(css.wrapper, css[newClass])}>{children}</div>;
};

export default Wrapper;
