import React from 'react';
import AbletonLogo from '@/components/AbletonLogo';
import Navbar from '@/components/Navbar';
import NavigationHeader from '@/components/NavigationHeader';
import About from '@/views/pages/About';
import { MenuProvider } from '@/contexts/MenuProvider';
import NavigationFooter from '@/components/NavigationFooter';
import FooterBox from '@/components/FooterBox';
import FooterLink from '@/components/FooterLink';
import PATH from '@/data/PATH.json';
import Dropdown from '@/components/Dropdown';
import Newsletter from '@/components/Newsletter';
import SocialMedia from '@/components/SocialMedia';

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
      <About />
      <NavigationFooter>
        <FooterBox id="newsletterBox" title="Sign up to our newsletter">
          <Newsletter />
        </FooterBox>
        <FooterBox id="socialBox" title="">
          <FooterLink contents={PATH.ableton} />
          <SocialMedia />
        </FooterBox>
        <FooterBox id="educationBox" title="Education">
          <FooterLink contents={PATH.education} />
        </FooterBox>
        <FooterBox id="communityBox" title="Community">
          <FooterLink contents={PATH.community} />
        </FooterBox>
        <FooterBox id="locationBox" title="Language and Location">
          <Dropdown id="prefersLanguage" options={['english']} />
          &nbsp;
          <Dropdown
            id="prefersLocation"
            options={['united states']}
          />
        </FooterBox>
      </NavigationFooter>
    </MenuProvider>
  );
}

export default App;
