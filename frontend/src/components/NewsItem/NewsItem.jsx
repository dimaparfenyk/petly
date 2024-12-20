import moment from "moment";
import css from "./_NewsItem.module.scss";

function NewsItem({ news }) {
  const { url, title, description, date = "" } = news;
  const formatedDate = moment(date).format("DD/MM/YYYY");

  return (
    <li className={css.card}>
      <article>
        <div className={css.separator}></div>
        <h2 className={css.card_title}>
          <a href={url} target="_blank">
            {title}
          </a>
        </h2>
        <p className={css.description}>{description}</p>
        <div className={css.news_meta}>
          <p className={css.date_text}>{date ? formatedDate : ""}</p>
          <a href={url} target="_blank" className={css.news_link}>
            Read more
          </a>
        </div>
      </article>
    </li>
  );
}

export default NewsItem;
