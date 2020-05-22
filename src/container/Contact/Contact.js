import React from "react";

import "./Contact.css";

const Contact = props => {
  const contacts = [
    { name: "linkedin", link: "https://www.linkedin.com/in/naufal-dean/" },
    { name: "github", link: "https://github.com/naufal-dean" },
    { name: "gitlab", link: "https://gitlab.com/naufal-dean" },
    { name: "instagram", link: "https://www.instagram.com/naufal.dean" }
  ];

  return (
    <div className="contact">
      <div className="contact-title">
        <h2>CONTACT</h2>
      </div>
      <div className="contact-content">
        <ul className="contact-list">
          {contacts.map(contact => (
            <li>
              <div>
                <a
                  href={`${contact.link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`fa fa-${contact.name}`}></i>
                </a>
              </div>
              <span>{contact.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Contact;
