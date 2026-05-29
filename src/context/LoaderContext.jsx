import { createContext, useContext } from "react";

export const LoaderContext = createContext({
  isLoading: true,
  isLoaderFinished: false,
});

export const useLoader = () => useContext(LoaderContext);
