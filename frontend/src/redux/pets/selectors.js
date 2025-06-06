export const selectAllPets = (state) => state.pets.items;

export const selectCurPet = (petId) => (state) =>
  state.pets.items.find((pet) => pet._id === petId);

export const selectFavoritePets = (state) => state.pets.favorites;

export const selectIsLoading = (state) => state.pets.isLoading;

export const selectMessage = (state) => state.pets.message;

export const selectError = (state) => state.pets.error;
