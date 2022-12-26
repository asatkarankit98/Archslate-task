import React from "react";
import Header from "./Header";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import "./landing_screen.css";

const LandingScreen = () => {
  return (
    <div>
      <Header />
      <div style={{ backgroundColor: "#FAFBFE" }}>
        <div className="section_body">
          <div className="text-start my-md-3">
            <KeyboardBackspaceOutlinedIcon className="me-2" />
            <span className="fw-bold">Back to jobs</span>
          </div>
          <div
            class="row py-md-3 primary_bgcolor mx-auto"
            style={{ borderRadius: "10px" }}
          >
            <div class="column col-6">
              <div class="col-12">
                <div className="row">
                  <div className="col-4 p-0">
                    <img
                      style={{ height: "85%" }}
                      src="/images/image 1.png"
                      alt="icon"
                    />
                  </div>
                  <div className="col-8 p-0 text-start py-1">
                    <h2 style={{ fontWeight: "700" }}>
                      {" "}
                      Architecture Designer
                    </h2>
                    <h5 className="my-md-4"> Black Mountain Architecture</h5>
                    <h6> Posted 07/27/2022 </h6>
                  </div>
                </div>
                <div className="row justify-content-around my-md-2">
                  <button type="button" class="col-3 btn btn-dark button_round">
                    Architecture
                  </button>{" "}
                  <button
                    type="button"
                    class="col-3 button_round"
                    style={{ backgroundColor: "#BBFEB5" }}
                  >
                    Freelance
                  </button>{" "}
                  <button
                    type="button"
                    class="col-3 btn btn-info button_round"
                    style={{ backgroundColor: "#CFE2FF" }}
                  >
                    Long-Term
                  </button>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="column" style={{ textAlign: "right" }}>
                <button class="btn">
                  <ShareOutlinedIcon />
                </button>
                <button class="btn">
                  <BookmarkBorderOutlinedIcon />
                </button>
                <div className="col-12 ">
                  <h4
                    className="col-9 float-end px-2 py-1 my-3"
                    style={{ backgroundColor: "#BBFEB5" }}
                  >
                    {" "}
                    Status: Accepting Application
                  </h4>
                </div>
                <button
                  type="button"
                  class="col-5 button_round"
                  style={{ backgroundColor: "#F29068" }}
                >
                  Apply on Archslate
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="row my-md-3 my-2 mx-auto">
              <div className="col-sm-3 ps-0">
                <div className="card">
                  <div className="card-body">
                    <h4>
                      <i className="bi bi-lightning-charge" />
                      Software Skills
                    </h4>
                    <div className="rhino_sketchup row my-3">
                      <div className="rhino col-5 button_round_secondary">
                        <i className="bi bi-lightning-charge" />
                        <span> Rhino</span>
                      </div>
                      <div className="sketchup col-5 button_round_secondary">
                        <span>Sketchup</span>
                      </div>
                    </div>
                    <div className="vectorworks col-8 button_round_secondary">
                      <span>Vectorworks</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="card">
                  <div className="card-body row">
                    <div className="col-2">
                      <i className="bi bi-star" />
                    </div>
                    <div className="col-10 text-start">
                      <h4 className>Experience</h4>
                      <div className="text_body">
                        <span>
                          Associate
                          <br />
                          3+ years
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="card">
                  <div className="card-body row">
                    <div className="col-2">
                      <i className="bi bi-currency-dollar" />
                    </div>
                    <div className="col-10 text-start">
                      <h4 className>Rate</h4>
                      <div className="text_body">
                        <span>$55-$65/hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 pe-0">
                <div className="card">
                  <div className="card-body row">
                    <div className="col-2">
                      <i className="bi bi-geo-alt" />
                    </div>
                    <div className="col-10 text-start">
                      <h4 className>Location</h4>
                      <div className="text_body">
                        <span>
                          Bozeman, MT
                          <br />
                          USA
                        </span>
                      </div>
                      <div className="onsite my-2 col-5 button_round_secondary">
                        <span>On-Site</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row my-md-3">
              <div className="col-sm-9">
                <div className="card" style={{ height: "100%" }}>
                  <div className="card-body User_details text-start">
                    <h5>About this role</h5>
                    <span className="u_detais_text">
                      Short overview about job and the way that the candidates
                      would fit into the company.
                      <br />
                      Can also include extra instructions for the application
                      process if any exist.
                    </span>
                    <h5 className="my-md-3 my-2">Responsibilities</h5>
                    <ul className="u_detais_text">
                      <li>specific day to day tasks</li>
                      <li>deliverables</li>
                      <li>work environment</li>
                      <li>role within the current team</li>
                      <li>etc.</li>
                    </ul>
                    <h5>Skills</h5>
                    <ul className="u_detais_text">
                      <li>software skills</li>
                      <li>technical skills</li>
                      <li>soft skills</li>
                      <li>other</li>
                    </ul>
                    <h5>Qualifications</h5>
                    <span>Required</span>
                    <ul className="u_detais_text">
                      <li>education</li>
                      <li>licenses and certifications</li>
                      <li>experience needed</li>
                    </ul>
                    <span>Bonus</span>
                    <ul className="u_detais_text">
                      <li>education</li>
                      <li>licenses and certifications</li>
                      <li>experience needed</li>
                    </ul>
                    <h5>Rate</h5>
                    <ul>
                      <li>if available</li>
                    </ul>
                    <h5>Time Estimate</h5>
                    <ul>
                      <li>if applicable</li>
                    </ul>
                    <h5>Work Authoriation</h5>
                    <ul>
                      <li>tbd</li>
                    </ul>
                    <h5>About Company</h5>
                    <span className="u_detais_text">
                      Description of company with any uniform info or diclaimers
                      - equal hiring
                      <br /> opportunity, etc.
                    </span>
                    <div className="row justify-content-between my-4">
                      <div
                        className="col-4 button_round text-light text-center"
                        style={{ backgroundColor: "#F28966" }}
                      >
                        <span>Apply on Archslate</span>
                      </div>
                      <div className="col-2 button_round bg-dark text-center text-light">
                        <i className="bi bi-star me-3" />
                        <span>Save</span>
                      </div>
                      <div className="col-4 button_round bg-dark text-center text-light">
                        <i className="bi bi-share me-3" />
                        <span>Share &amp; Refer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="card">
                  <div className="card-body">
                    <h4>Job Poster</h4>
                    <div className="row my-3">
                      <div className="col-sm-3">
                        <img src="/images/profile.png" alt />
                      </div>
                      <div className="col-sm-9">
                        <div className="col text-start">
                          <div className="row">
                            <span>John Carlos</span>
                          </div>
                          <div className="row">
                            <span>Project Manager</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="message button_round_secondary col-8">
                      <i className="bi bi-envelope-fill me-2" />
                      <span>Message</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingScreen;
