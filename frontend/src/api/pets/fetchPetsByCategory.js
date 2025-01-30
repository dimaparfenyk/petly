const fetchPetsByCategory = async (category) => {
  try {
    const res = await fetch(`http://localhost:3000/api/pets/${category}`);
    return await res.json();
  } catch (error) {
    console.log(error.message);
  }
};

export default fetchPetsByCategory;
