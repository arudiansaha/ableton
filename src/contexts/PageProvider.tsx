import React from 'react';

type PageProviderProps = {
  children: React.ReactNode;
  value: string;
}

const PageContext = React.createContext<string>('/');

function PageProvider({ children, value }: PageProviderProps) {
  return (
    <PageContext.Provider value={value}>
      {children}
    </PageContext.Provider>
  );
}

export { PageContext, PageProvider };
