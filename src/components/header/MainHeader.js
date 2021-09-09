import React from "react";
import { Link } from "react-router-dom";
import "./header.css"
import brandIcon from "../../resources/images/icon/brand-icon.png";
const MainHeader = () => {
  return (
    <>
      <div className="main-header">
        <div className="container px-0">
          <div className="d-flex justify-content-between align-items-center py-3">
            <Link to="/" className="brand-icon text-decoration-none">
              <img src={brandIcon} alt="brand" />
            </Link>
            <div className="header-links">
              <Link to="/contact-us">Contact</Link>
              <Link to="about-company">About</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHeader;
