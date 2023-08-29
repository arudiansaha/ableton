import SubNavbar from '@/components/SubNavbar';
import { PageProvider } from '@/contexts/PageProvider';

function About() {
  return (
    <PageProvider value="about">
      <SubNavbar />
      <main>
        <h1>About Page</h1>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </main>
    </PageProvider>
  );
}

export default About;
