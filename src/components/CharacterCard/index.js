import React from "react";
// import React, { Component } from "react;";
import "./style.css";

function CharacterCard(props) {
  return (
    <div className="card" onClick={props.imageClick}>
      <img alt={props.name} src={props.image} className="image" />

      <div class="middle">
        <div class="text">{props.name}</div>
      </div>
    </div>
  );
}

export default CharacterCard;
