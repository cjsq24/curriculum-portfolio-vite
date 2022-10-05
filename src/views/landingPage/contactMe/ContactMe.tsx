import React from 'react';

const ContactMe = () => {
  return (
    <div className="l-contact-container">
      <span className="l-contact-title">Contact me</span>
      <span className="l-contact-subtitle">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry`s standard dummy text ever
        since the 1500s
      </span>
      <form className="l-contact-form">
        <div className="l-row">
          <div className="l-input-container">
            <label>First Name</label>
            <input />
          </div>
          <div className="l-input-container">
            <label>Last Name</label>
            <input />
          </div>
        </div>
        <div className="l-input-container">
          <label>Email</label>
          <input />
        </div>
        <div className="l-input-container">
          <label>Description</label>
          <textarea></textarea>
        </div>
        <button className="l-submit-button-contact" type="button">
          <span>Submit</span>
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
