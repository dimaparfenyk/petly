import css from "./_Section.module.scss";

const Section = ({ children }) => {
  return <section className={css.section}>{children}</section>;
};

export default Section;
