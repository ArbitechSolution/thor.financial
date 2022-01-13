import React from "react";
import "./MenuOneDown.css";
import Card from "react-bootstrap/Card";
import heimdall from "../../asset/heimdall.png";
import freya from "../../asset/freya.png";
import thor from "../../asset/thor.png";
import odin from "../../asset/odin.png";
function MenuOneDown() {
  return (
    <div className="container">
      <div className="row  mt-4 d-flex justify-content-center">
        <div className="col-md-12 col-11 jMtTaK">
          <div className="col-md-12 col-11">
            <h4
              className="fw-bolder text-start"
              style={{ color: "rgb(250, 223, 61)" }}
            >
              Create a Node
            </h4>
          </div>
          <div className="col-md-12 col-11 mt-3">
            <p className="fs-sm-3" style={{ color: "rgb(237, 242, 247)" }}>
              Choose a warrior to fight for your rewards
            </p>
            <p style={{ color: "rgb(160, 174, 192)" }}>
              Choose all warriors to unlock the full power of the Bifrost
            </p>
          </div>
          <div className="row">
            <div className="col-md-3 col-11">
              <Card className="menuonecard">
                <Card.Img variant="top" src={heimdall} class="alerts-border" />
                <Card.Body>
                  <Card.Title>HEIMDALL</Card.Title>
                  <Card.Text>
                    1.250 THOR per node Earn 0.02 THOR per day
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3 col-11">
              <Card className="menuonecard">
                <Card.Img variant="top" src={freya} class="alerts-border1" />
                <Card.Body>
                  <Card.Title>FREYA</Card.Title>
                  <Card.Text>
                    6.250 THOR per node Earn 0.13 THOR per day
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3 col-11">
              <Card className="menuonecard">
                <Card.Img variant="top" src={thor} class="alerts-border2" />
                <Card.Body>
                  <Card.Title>THOR</Card.Title>
                  <Card.Text>
                    12.500 THOR per node Earn 0.33 THOR per day
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3 col-11">
              <Card className="menuonecard">
                <Card.Img variant="top" src={odin} class="alerts-border3" />
                <Card.Body>
                  <Card.Title>ODIN</Card.Title>
                  <Card.Text>
                    78.125 THOR per node Earn 2.73 THOR per day
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6 col-11">
              <p
                className="text-start fs-sm-5"
                style={{ color: "rgb(237, 242, 247)" }}
              >
                Create a THOR Node with $THOR tokens to earn lifetime high-yield
                $THOR token rewards.
              </p>
              <p className="text-start" style={{ color: "rgb(160, 174, 192)" }}>
                Rewards calculations are based on many factors, including the
                number of nodes, node revenue, token price, and protocol
                revenue, and they are variable.
              </p>
              <div className="d-grid gap-2">
                <button className="btn menudownbutton fw-bolder fs-5">
                  BUY $THOR
                </button>
              </div>
            </div>
            <div className="col-md-6 col-11 mt-md-1 mt-3">
              <div className="row">
                <div className="col-md-12">
                  <input
                    placeholder="Name your Node"
                    className="ant-input sc-bBHxTw iwJqUg form-control"
                    type="text"
                    value=""
                    name=""
                  />
                </div>
                <div className="col-md-12 mt-1">
                  <p className="cQVnna text-start fs-6">
                    Please approve the contract before creating a node if this
                    is your first interaction with THOR.
                  </p>
                </div>
                <div className="col-md-12 ">
                  <p className="text-white text-start fs-5">
                    Active warrior: HEIMDALL
                  </p>
                </div>
                <div className="col-md-12 col-11 d-flex justify-content-between">
                  <button className="btn ant-btn fw-bolder fs-sm-6">
                    Approve Contract
                  </button>
                  <button className="btn ant-btn fw-bolder fs-sm-6" disabled>
                    Compound Tier Rewards
                  </button>
                  <button className="btn ant-btn fw-bolder fs-sm-6" disabled>
                    Create Node
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12 text-white fs-3">Compounding Rules</div>
            <div className="col-md-12 text-white text-start fs-5">
              <ul>
                <li>You can only compound in the same tier.</li>
                <li>You can only compound across tiers in god mode.</li>
                <li>
                  To unlock god mode, you need at least 1 node from all the
                  available tiers.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuOneDown;
