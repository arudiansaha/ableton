function Newsletter() {
  return (
    <>
      <p>Enter your email address to stay up to date with the latest offers, tutorials, downloads, surveys and more.</p>
      <form className="form" name="newsletterForm" id="newsletterForm">
        <input
          className="form__input"
          type="email"
          name="newsletterEmail"
          id="newsletterEmail"
          placeholder="Email Address"
          required
        />
        <button
          className="form__button"
          type="submit"
          form="newsletterForm"
          aria-label="subscribe for newsletter"
        >
          Sign Up
        </button>
      </form>
    </>
  );
}

export default Newsletter;
