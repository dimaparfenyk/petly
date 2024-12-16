import css from "./_PageTitle.module.scss";

const PageTitle = ({ text }) => {
  return <h1 className={css.page_title}>{text}</h1>;
};

export default PageTitle;
