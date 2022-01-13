import React from "react";
import "./Menuone.css";
import nodes from "../../asset/nodes.svg";
import reward from "../../asset/rewards.svg";
function MenuOne() {
  return (
    <div className="container">
      <div className="row mt-md-5 ">
        <div className="col-12">
          <h4 className="text-start fs-4 fw-bolder">
            <span>Welcome Asgardian,</span>
          </h4>
          <p className="text-white text-start lh-1 fs-6">
            You can use this app to create THOR Nodes, view, claim and compound
            rewards.
          </p>
        </div>
      </div>
      <div className="row d-flex justify-content-md-between d-flex justify-content-center">
        <div className="col-md-3 col-11 menuonebox text-start">
          <p>
            <img src={nodes} />
            <span>&nbsp;My Nodes: 0 / 100</span>
          </p>
        </div>
        <div className="col-md-4 col-11 menuonebox1 text-start">
          <p>
            <img src={nodes} />
            <span>&nbsp;Total nodes: 39764</span>
          </p>
          <p>
            <img src={nodes} />
            <span>&nbsp;HEIMDALL: 7203</span>
          </p>
          <p>
            <img src={nodes} />
            <span>&nbsp;FREYA: 3360</span>
          </p>
          <p>
            <img src={nodes} />
            <span>&nbsp;THOR: 23805</span>
          </p>
          <p>
            <img src={nodes} />
            <span>&nbsp;ODIN: 5405</span>
          </p>
        </div>
        <div className="col-md-3 col-11 menuonebox2 text-start">
          <p style={{color: "rgb(72, 187, 120)"}}>
            <img src={reward} />
            &nbsp;Rewards
          </p>
        </div>
      </div>
    </div>
  );
}

export default MenuOne;
