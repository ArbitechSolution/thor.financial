import React from "react";
import "./Menu.css";
import hammer from "../../asset/the-hammer.svg";
function Menu() {
  return (
    <div className="container">
      <div className="row mt">
        <div className="col-md-6 text-white  text-start hero-text d-flex align-items-center">
          <p className="">
            Gain passive income for life by leveraging THOR's Financial{" "}
            <span>multi-chain yield-farming</span> protocol
          </p>
        </div>
        <div className="col-md-6 ">
          <img src={hammer} />
        </div>
      </div>
      <div className="row mt">
        <div className="col-md-4 text-start">
          <span className="headi ">Unbeatable yield potential</span>
          <p className="menup">
            THOR provides an excessive yield potential with a protocol that
            works. It efficiently aggregates return from protocol-owned
            liquidity with returns from DeFi protocols across many chains to
            allocate rewards and yield holders.
          </p>
        </div>
        <div className="col-md-4  text-start">
          <span className="headi ">Diversified DeFi</span>
          <p className="menup">
            Using our trading algorithm, we invest in different DeFi projects
            like OHM, TIME, staking pools, NFT and a host of other carefully
            curated projects. To ensure we live by our community project policy,
            the selected projects are published within the community for a vote
            before we initiate the investment protocol.
          </p>
        </div>
        <div className="col-md-4 text-start">
          <span className="headi ">Guaranteed income - for life</span>
          <p className="menup">
            We keep an eye out for bull and bear market patterns so that we can
            profit from every market circumstance. There is no downtime to our
            earnings. The earnings made are returned to you, the investor, in
            full. We repeat this cycle, creating an endless stream of passive
            income for you, and your estate. This is why we call it generational
            wealth, it is built to outlast you.
          </p>
        </div>
      </div>
      <div className="row d-flex justify-content-center justify-content-md-around mt">
          <div className="col-12">
          <h3 className="fs-2 fw-bolder text-white">HOW IT WORKS</h3>
          </div>
        <div className="col-md-5 col-11 Box d-flex justify-content-center text-white text-start mt-md-4 mt-3 d-flex align-items-center">
          <p>Buy&nbsp;<span>THOR tokens</span>, create a Node and&nbsp;
          <span>earn daily rewards</span>.</p>
        </div>
        <div className="col-md-5 col-11 Box d-flex justify-content-center text-white text-start mt-md-4 mt-3 d-flex align-items-center ">
        <p><span>Our objective</span> is to help as many to generate passive income
          continuously with minimal effort. This is the reward people truly
          deserve and we are bringing this to you.</p>
        </div>
      </div>
    </div>
  );
}

export default Menu;
