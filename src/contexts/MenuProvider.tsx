import React from 'react';

type MenuProviderProps = {
  children: React.ReactNode;
  value: string;
}

const MenuContext = React.createContext<string>('');

function MenuProvider({ children, value }: MenuProviderProps) {
  return (
    <MenuContext.Provider value={value}>
      {children}
    </MenuContext.Provider>
  );
}

export { MenuContext, MenuProvider };
