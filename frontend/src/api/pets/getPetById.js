const getPetById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/pets/${id}`);
    return await res.json();
  } catch (error) {
    console.log(error.message);
  }
};

export default getPetById;
