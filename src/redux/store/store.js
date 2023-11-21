import { configureStore } from "@reduxjs/toolkit";
import { pokemonApi } from "../feature/pokemons/pokemon";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { productsApi } from "../feature/product/productApi";

export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      pokemonApi.middleware,
      productsApi.middleware,
    ),
});
setupListeners(store.dispatch);
