import AboutDescription from '@/components/AboutDescription';
import AboutHero from '@/components/AboutHero';
import SubNavbar from '@/components/SubNavbar';
import { PageProvider } from '@/contexts/PageProvider';
import CONTENT from '@/data/CONTENT.json';

function About() {
  const { about } = CONTENT.pages;

  return (
    <PageProvider value="about">
      <SubNavbar />
      <main className="about">
        <AboutHero />
        <AboutDescription
          title={about[0].title}
          paragraph={about[0].paragraph}
        />
        <br />
        <AboutDescription
          title={about[1].title}
          paragraph={about[1].paragraph}
        />
        <br />
        <AboutDescription
          title={about[2].title}
          paragraph={about[2].paragraph}
        />
        <br />
        <AboutDescription
          title={about[3].title}
          paragraph={about[3].paragraph}
        />
        <br />
        <AboutDescription
          title={about[4].title}
          paragraph={about[4].paragraph}
        />
        <br />
        <AboutDescription
          title={about[5].title}
          paragraph={about[5].paragraph}
        />
      </main>
    </PageProvider>
  );
}

export default About;
