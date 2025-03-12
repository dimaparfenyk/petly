export const selectAllPets = (state) => state.pets.items;

export const selectCurPet = (petId) => (state) =>
  state.pets.items.find((pet) => pet._id === petId);

export const selectFavoritePets = (state) => state.pets.favorites;

export const selectIsLoading = (state) => state.pets.isLoading;
