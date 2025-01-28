import { useEffect, useState } from "react";
import useFilter from "../../hooks/useFilter";

import PageTitle from "../../components/PageTittle";
import Container from "../../components/Container";
import NewsList from "../../components/NewsList/NewsList";
import Section from "../../components/Section";
import Filter from "../../components/Filter";
import Wrapper from "../../components/Wrapper";
import Spinner from "../../components/Spinner";

import api from "../../api/news";

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [filterValue, handleFilterChange] = useFilter("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.fetchNews().then((res) => {
      setNews(res);
      setLoading(false);
    });
  }, []);

  const filteredNews = news.filter(({ title }) =>
    title.toLowerCase().trim().includes(filterValue)
  );

  return (
    <Section>
      <Container>
        <Wrapper>
          <PageTitle text={"News Page"} />
          <Filter onChange={handleFilterChange} />
          <Spinner loading={loading} />
          {!loading && <NewsList news={filteredNews} />}
        </Wrapper>
      </Container>
    </Section>
  );
};

export default NewsPage;
