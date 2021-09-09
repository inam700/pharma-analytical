import React from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMobileAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";

const InfoHeader = () => {
  return (
    <>
      <div className="info-header">
        <div className="d-flex justify-content-between align-items-center p-3">
          <div className="left-side d-flex">
            <div className="phone-div">
              <p>
                <FontAwesomeIcon icon={faPhoneAlt} /> 0092-42-36306232
              </p>
            </div>
            <div >
              <p>
                <FontAwesomeIcon icon={faMobileAlt} /> +92-333-4269701
              </p>
            </div>
          </div>
          <div className="right-side">
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> pharmaas@gmail.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoHeader;
