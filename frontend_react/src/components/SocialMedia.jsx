import React from "react";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://github.com/putraa22" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
      </div>
      <div>
        <a href="https://web.facebook.com/Putraaa22/" target="_blank" rel="noreferrer">
          <FaFacebookF />
        </a>
      </div>
      <div>
        <a href="https://web.facebook.com/Putraaa22/" rel="noreferrer">
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
