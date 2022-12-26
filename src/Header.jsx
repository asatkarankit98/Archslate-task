import React from "react";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import LanguageIcon from "@mui/icons-material/Language";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import "./landing_screen.css";

const Header = () => {
  return (
    <div>
      <div className="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-4 w-100">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <a className="navbar-brand mt-2 mt-lg-0" href="#">
                <img
                  src="/images/Blue 4.png"
                  className="me-md-3"
                  height={15}
                  alt="MDB Logo"
                  loading="lazy"
                  style={{ height: "100%", width: "22%", margin: "0 auto" }}
                />
                <img
                  src="/images/Archslate.png"
                  height={15}
                  alt="MDB Logo"
                  loading="lazy"
                  style={{ height: "100%", width: "74%", margin: "0 auto" }}
                />
              </a>
            </div>
            <div className="d-flex align-items-center">
              <div className="top_menus text-reset me-4 ">
                <a className="text-reset" href="#">
                  <AutoAwesomeOutlinedIcon />
                </a>
                <p>Condidates</p>
              </div>
              <div className="top_menus text-reset me-4 ">
                <a className="text-reset" href="#">
                  <LanguageIcon />
                </a>
                <p>Companies</p>
              </div>
              <div className="top_menus text-reset me-4 ">
                <a className="text-reset" href="#">
                  <WorkOutlineIcon />
                </a>
                <p>Jobs</p>
              </div>
              <div className="top_menus text-reset me-4 ">
                <a className="text-reset" href="#">
                  <MailOutlineOutlinedIcon />
                </a>
                <p>Notification</p>
              </div>
              <div className="top_menus text-reset me-1 ">
                <a className="text-reset" href="#">
                  <AccountCircleOutlinedIcon />
                </a>
                <p>User Profile</p>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
