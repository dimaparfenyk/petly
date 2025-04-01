const fetchSponsors = async () => {
  try {
    const res = await fetch("https://petly-cvix.onrender.com/api/sponsors");
    return await res.json();
  } catch (error) {
    console.log(error.message);
  }
};

export default fetchSponsors;
