import css from "./_NewsItem.module.scss";

function NewsItem({ news }) {
  return (
    <li className={css.card}>
      <article>
        <div className={css.separator}></div>
        <h2 className={css.card_title}>
          <a href={news.url} target="_blank">
            {news.title}
          </a>
        </h2>
        <p className={css.description}>{news.description}</p>
        <p>{news.date}</p>
        <a href={news.url} target="_blank" className={css.news_link}>
          Read more
        </a>
      </article>
    </li>
  );
}

export default NewsItem;
