'use client';

import { ReactNode, createContext, useContext, useState } from 'react';

interface ISearchContext {
  query?: string;
  onTypeHandler?: (e: React.FormEvent<HTMLInputElement>) => void;
}

const SearchContext = createContext<ISearchContext>({});

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const onTypeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchQuery(e.currentTarget.value);
  };

  return (
    <SearchContext.Provider
      value={{
        query: searchQuery,
        onTypeHandler,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);

  if (context === undefined) {
    throw new Error('useSearch must be used inside Context');
  }

  return context;
};
