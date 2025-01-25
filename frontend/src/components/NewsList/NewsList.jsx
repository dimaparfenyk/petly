import moment from "moment";
import NewsItem from "../NewsItem";
import css from "./_NewsList.module.scss";

function NewsList({ news }) {
  const sortedNews = news.sort(
    (a, b) => moment(b.date).unix() - moment(a.date).unix()
  );

  return (
    <ul className={css.news_list}>
      {news &&
        sortedNews.map((item) => <NewsItem key={item._id} news={item} />)}
    </ul>
  );
}

export default NewsList;
