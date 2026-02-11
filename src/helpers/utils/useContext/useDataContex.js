import { createContext, useContext } from 'react';

export const DataContext = createContext({
  data: [],
  isLoading: false,
});

export const useDataContext = () => useContext(DataContext);
