import React from "react";
import twitter from "../../asset/twitter-button.svg";
import discord from "../../asset/discord-button.svg";
import "./JoinCommunity.css";
function JoinCommunity() {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-12 col-11 boxes1 d-flex flex-md-row flex-column">
          <div className="col-md-6 ms-md-3">
            <h4
              className="fw-bolder fs-4 text-start mt-2"
              style={{ color: "#9268de" }}
            >
              Join Our Community
            </h4>
            <p className="text-start text-white mt-2">
              Created some nodes and wondering what to do next? Join your fellow
              Asgardians on Twitter and Discord to keep up with the latest news
              about THOR as well as meet other Asgardians that have had the
              courage to step into DeFi 3.0!
            </p>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center flex-row ">
            <img src={twitter} className="m-4" />
            <img src={discord} className="m-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinCommunity;
