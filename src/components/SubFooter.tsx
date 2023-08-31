function SubFooter() {
  return (
    <div className="footer__secondary">
      <ul className="footer__list">
        <li className="footer__item"><a href="#">Contact Us</a></li>
        <li className="footer__item"><a href="#">Press Resource</a></li>
        <li className="footer__item"><a href="#">Legal Info</a></li>
        <li className="footer__item"><a href="#">Privacy Policy</a></li>
        <li className="footer__item"><a href="#">Cookie Settings</a></li>
        <li className="footer__item"><a href="#">Imprint</a></li>
      </ul>
      <div className="footer__copyright">
        <svg
          aria-hidden="true"
          focusable="false"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          height="21"
          viewBox="0 0 45 21"
        >
          <path
            d="M0 0h3v21H0zM6 0h3v21H6zM12 0h3v21h-3zM18 0h3v21h-3zM24 18h21v3H24zM24 12h21v3H24zM24 6h21v3H24zM24 0h21v3H24z"
          ></path>
        </svg>
        <p>Made in Berlin</p>
      </div>
    </div>
  );
}

export default SubFooter;
