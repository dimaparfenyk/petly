import PageTitle from "../../components/PageTittle";
import Container from "../../components/Container";
// import css from "./_NewsPage.module.scss";
import { useEffect, useState } from "react";
import api from "../../api/news";
import NewsList from "../../components/NewsList/NewsList";

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
    <Container>
      <PageTitle text={"News Page"} />
      <NewsList news={news} />
    </Container>
  );
};

export default NewsPage;
