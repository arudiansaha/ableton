import React from 'react';
import AbletonLogo from '@/components/AbletonLogo';
import Navbar from '@/components/Navbar';
import NavigationHeader from '@/components/NavigationHeader';
import About from '@/views/pages/About';
import { MenuProvider } from '@/contexts/MenuProvider';

function App() {
  const [menuValue, setMenuValue] = React.useState<string>('');
  const menuHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    if (menuValue === '') {
      setMenuValue('active');
    } else {
      setMenuValue('');
    }
  };

  return (
    <MenuProvider value={menuValue}>
      <NavigationHeader>
        <AbletonLogo onClick={menuHandler} />
        <Navbar onClick={() => { }} />
      </NavigationHeader>
      <main>
        <About />
      </main>
    </MenuProvider>
  );
}

export default App;
