import NewsItem from "../NewsItem";
import css from "./_NewsList.module.scss";

function NewsList({ news }) {
  return (
    <ul className={css.news_list}>
      {news && news.map((item) => <NewsItem key={item._id} news={item} />)}
    </ul>
  );
}

export default NewsList;
