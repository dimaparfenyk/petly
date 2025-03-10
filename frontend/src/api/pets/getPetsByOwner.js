const getPetsByOwner = async (token) => {
  try {
    const res = await fetch(`http://localhost:3000/api/pets/own`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return await res.json();
  } catch (error) {
    console.log(error.message);
  }
};

export default getPetsByOwner;
