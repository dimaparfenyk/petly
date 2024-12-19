import PageTitle from "../../components/PageTittle";
import Container from "../../components/Container";
import css from "./_NewsPage.module.scss";
import { useEffect, useState } from "react";
import api from "../../api/news";
import NewsList from "../../components/NewsList/NewsList";
import Section from "../../components/Section";
import Filter from "../../components/Filter";

const NewsPage = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews();
  }, []);

  async function getNews() {
    const data = await api.fetchNews();
    setNews(data);
  }

  return (
    <Section>
      <Container>
        <div className={css.wrapper}>
          <PageTitle text={"News Page"} />
          <Filter />
          <NewsList news={news} />
        </div>
      </Container>
    </Section>
  );
};

export default NewsPage;
