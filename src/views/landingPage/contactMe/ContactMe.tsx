import HeaderTitle from '../components/HeaderTitle';

const ContactMe = () => {
  return (
    <section className="l-contact-container">
      <HeaderTitle title="Contact Me" />
      <article className="l-contact-card">
        <span className="l-contact-subtitle">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry`s standard dummy text ever
          since the 1500s
        </span>
        <div className="l-horizontal-line" />
        <form className="l-contact-form">
          <div className="l-input-card">
            <label>Name or Reason</label>
            <input />
          </div>
          <div className="l-input-card">
            <label>Email</label>
            <input />
          </div>
          <div className="l-input-card">
            <label>Description</label>
            <textarea></textarea>
          </div>
          <button className="l-submit-button-contact" type="button">
            <span>Submit</span>
          </button>
        </form>
      </article>
    </section>
  );
};

export default ContactMe;
