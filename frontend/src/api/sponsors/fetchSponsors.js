const fetchSponsors = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/sponsors");
    return await res.json();
  } catch (error) {
    console.log(error.message);
  }
};

export default fetchSponsors;
