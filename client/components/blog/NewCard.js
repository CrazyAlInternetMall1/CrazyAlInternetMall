import { API } from "../../config";
import { useState } from "react";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

const NewCard = ({ blog }) => {

  return (
      <div className="card-background">
        <div className="card-outline">
          <div className="card-main">
          <div style={{ color: "#fff" }}>
        {/* Title */}
        <h2 className="c-title">Plug-N-Play Home</h2>
        {/* Image */}
        <div className="c-img-container">
          <img
            src="../static/images/skull.webp"
            className="img img-fluid"
          ></img>
        </div>
        {/* Body */}
        <section className="c-body">
          <div className="c-info desc">
            Green apples have a high fiber content which helps in increasing the
            body's metabolism.Green apples have a high fiber content which helps
            in increasing the body's metabolism.Green apples
          </div>
        </section>
        <div className="price-container">
          <p>$</p>
          <h1 className="price">900k</h1>
        </div>
        {/* Likes, and Links */}
      </div>
        </div>
      </div>
    </div>
  );
};

export default NewCard;
