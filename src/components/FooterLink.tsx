type Content = {
  url: string;
  value: string;
}

type FooterLinkProps = {
  contents: Content[];
}

function FooterLink({ contents }: FooterLinkProps) {
  const listItems = contents.map((content, index) => (
    <li className="footer__item" key={index}>
      <a href={content.url}>{content.value}</a>
    </li>
  ));

  return <ul className="footer__list">{listItems}</ul>;
}

export default FooterLink;
