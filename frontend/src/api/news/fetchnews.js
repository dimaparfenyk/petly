const fetchNews = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/news");
    return await res.json();
  } catch (error) {
    console.log(error.message);
  }
};

export default fetchNews;
