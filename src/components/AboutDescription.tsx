type AboutDescriptionProps = {
  title: string;
  paragraph: string;
}

function AboutDescription(props: AboutDescriptionProps) {
  const { title, paragraph } = props;

  return (
    <div className="about__description">
      <h1
        className="about__title"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <p
        className="about__paragraph"
        dangerouslySetInnerHTML={{ __html: paragraph }}
      />
    </div>
  );
}

export default AboutDescription;
