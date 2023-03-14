import React from "react";

const Register: React.FC = () => {
  return (
    <div className="register">
      <p className="processbody-main-tag-title">Resident registration</p>
      <div>
        <div className="processbody-main-tag-input">
          <p className="processbody-main-tag-input-title">Last name</p>
          <input type="text" className="processbody-theme-select" />
        </div>
        <div className="processbody-main-tag-input">
          <p className="processbody-main-tag-input-title">First name</p>
          <input type="text" className="processbody-theme-select" />
        </div>
        <div className="register-flex">
          <div className="processbody-main-tag-input">
            <p className="processbody-main-tag-input-title">Contact person</p>
            <input type="text" className="processbody-theme-select" />
          </div>
          <div className="processbody-main-tag-input">
            <p className="processbody-main-tag-input-title">AHV-number</p>
            <input type="text" className="processbody-theme-select" />
          </div>
        </div>
        <div className="processbody-main-tag-input">
          <p className="processbody-main-tag-input-title">
            Assigned supervisor
          </p>
          <input type="text" className="processbody-theme-select" />
        </div>
        <div className="register-flex">
          <div className="processbody-main-tag-input">
            <p className="processbody-main-tag-input-title">Illnessr</p>
            <input type="text" className="processbody-theme-select" />
          </div>
          <div className="processbody-main-tag-input">
            <p className="processbody-main-tag-input-title">Civil status</p>
            <input type="text" className="processbody-theme-select" />
          </div>
        </div>
        <div className="register-flex">
          <div className="processbody-main-tag-input">
            <p className="processbody-main-tag-input-title">Allergies</p>
            <input type="text" className="processbody-theme-select" />
          </div>
          <div className="processbody-main-tag-input">
            <p className="processbody-main-tag-input-title">Etc</p>
            <input type="text" className="processbody-theme-select" />
          </div>
        </div>
        <div className="register-flex">
          <div className="processbody-main-tag-input">
            <p className="processbody-main-tag-input-title">Comment</p>
            <input type="text" className="processbody-theme-select" />
          </div>
          <div className="processbody-main-tag-input">
            <p className="processbody-main-tag-input-title">
              Room registration
            </p>
            <input type="text" className="processbody-theme-select" />
          </div>
        </div>
      </div>
      <div className="maincreate-ressort-btn__scheduleteambodybtn">
        <button className="maincreate-ressort-btn btn">Create Ressort</button>
      </div>
    </div>
  );
};

export default Register;
