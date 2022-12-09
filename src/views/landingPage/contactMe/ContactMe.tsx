import HeaderTitle from '../components/HeaderTitle';
import SocialSection from '../components/SocialSection';

const ContactMe = () => {
  return (
    <section className="l-contact-container">
      <HeaderTitle title="Contáctame" />
      <article className="l-contact-card">
        <span className="l-contact-subtitle">
          Este formulario no funciona por el momento
        </span>
        <div className="l-horizontal-line" />
        <form className="l-contact-form">
          <div className="l-input-card">
            <label>Nombre o razón</label>
            <input />
          </div>
          <div className="l-input-card">
            <label>Correo</label>
            <input />
          </div>
          <div className="l-input-card">
            <label>Descripción</label>
            <textarea></textarea>
          </div>
          <button className="l-submit-button-contact" type="button">
            <span>Enviar</span>
          </button>
        </form>
      </article>
      <SocialSection />
    </section>
  );
};

export default ContactMe;
