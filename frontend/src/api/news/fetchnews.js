const fetchNews = async () => {
  try {
    const res = await fetch("https://petly-cvix.onrender.com/api/news");
    return await res.json();
  } catch (error) {
    console.log(error.message);
  }
};

export default fetchNews;
