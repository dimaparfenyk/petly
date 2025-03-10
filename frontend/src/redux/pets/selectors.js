export const selectAllPets = (state) => state.pets.items;

export const selectCurPet = (petId) => (state) =>
  state.pets.items.find((pet) => pet._id === petId) || null;

export const selectFavoritePets = (state) =>
  state.pets.items.filter((pet) => pet.favorite === true);
