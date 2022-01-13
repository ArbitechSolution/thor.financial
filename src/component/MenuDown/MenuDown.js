import React from "react";
import "./MenuDown.css";
import check from "../../asset/check-gold.svg";
import twitter from "../../asset/twitter-button.svg"
import discord from "../../asset/discord-button.svg"
import { Link } from "react-router-dom";
function MenuDown() {
  return (
    <div className="container">
      <div className="row mt">
        <div className="col-md-12">
          <h3 className="fs-2 fw-bolder text-white">Our Vision</h3>
        </div>
        <div className="col-md-10 ">
          <p className="text-white text-start fs-5 mt-md-5 mt-4">
            <span>Our goal</span> is to provide you with high-yield rewards by
            exposing you to over 200 different multi-chain DeFi protocols. All
            from within the power of a <span>single THOR Node</span>.
          </p>
        </div>
        <div className="col-md-10 ">
          <p className="text-white text-start fs-5">
            While We do the heavy lifting by researching and identifying
            enticing yield generating options, you get to enjoy daily passive
            returns, forever.
          </p>
        </div>
      </div>
      <div className="row mt d-flex justify-content-center">
        <div className="col-md-12 menudowndiv">
          <p>
            ENJOY A PROFIT YIELD FOR LIFE WITH{" "}
            <span style={{ color: "#ecd85b" }}>10 $THOR PER NODE</span>
          </p>
        </div>
      </div>
      <div className="row d-flex justify-content-center flex-row">
        <div className="col-md-12 col-11 boxess d-flex flex-md-row flex-column">
          <div className="col-md-6 text-start lh-sm mt-4 mb-1 ms-3">
            <p className="text-white fs-5 lh-sm">
              <img src={check} className="menudownpp" />
              &nbsp;&nbsp;A breakthrough protocol providing lifetime returns
            </p>
            <p className="text-white fs-5 lh-sm">
              <img src={check} className="menudownpp " />
              &nbsp;&nbsp;Sit-back and enjoy the rewards, no work for you to do
            </p>
            <p className="text-white fs-5 lh-sm">
              <img src={check} className="menudownpp" />
              &nbsp;&nbsp;Passive income without the risk of rug pulls and scams
            </p>
          </div>
          <div className="col-md-5  d-flex d-flex justify-content-center align-items-center flex-row">
            <button className="btn btnprimary fs-4 fw-bolder p-2 m-3">
              <span id="menudownspan">BUY $THOR</span>
            </button>
            <Link to="/launchapp" target="_blank">
            <a className="btn btnsecondary fs-4 fw-bolder p-2 m-3">
              LAUNCH APP
            </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-md-12 col-11 boxes1 d-flex flex-md-row flex-column">
          <div className="col-md-6 ms-md-3">
            <h4
              className="fw-bolder fs-4 text-start mt-2"
              style={{ color: "#9268de" }}
            >
              Join Our Community
            </h4>
            <p className="text-start text-white mt-5">
              Have questions or want to get a feel of the community before
              diving in? Then join our Asgardians on Twitter or Discord and
              learn more about Thor financial, the future of DeFi
            </p>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center flex-row ">
             <img src={twitter} className="m-4"/>
             <img src={discord} className="m-4"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuDown;
