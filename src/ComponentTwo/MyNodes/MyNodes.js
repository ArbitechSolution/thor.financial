import React from "react";
import Card from "react-bootstrap/Card";
import "./MyNodes.css";
import images from "../../asset/images.png";
import { MdFlashlightOn } from "react-icons/md";

function MyNodes() {
  
  return (
    <div className="container">
      {/* <div className="row"> */}
      {/* <div className="col-md-12"> */}
      <Card className="nodecard">
        <Card.Header className="d-flex flex-row bd-highlight d-flex justify-content-between">
          <div>My Nodes</div>
          <div>Warrior</div>
         
          <div>RPC</div>
          <div>Rewards</div>
        </Card.Header>

        <Card.Body className="m-4">
          <Card.Title>
            <i class="far fa-folder-open fa-3x"></i>
          </Card.Title>
          <Card.Text>No Data</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MyNodes;
