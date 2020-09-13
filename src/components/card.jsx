import React from "react";
import "./card.css";

const Card = ({ championData, onDelete }) => {
  return (
    <div className="container">
      <div className="box" style={{ width: "100%" }}>
        <div className="card d-flex flex-row">
          <button
            className="btn btn-primary"
            style={{ position: "absolute", right: 1, margin: 10 }}
            onClick={() => onDelete(championData.id)}
          >
            Remove
          </button>
          <div className="p-3">
            <img
              src={championData.image_url}
              style={{ height: 300, width: 300, borderRadius: 10 }}
            />
          </div>
          <div className="p-3">
            <h6>Name: {championData.name}</h6>
            <h6>Armor: {championData.armor}</h6>
            <h6>Attack Damage: {championData.attackdamage}</h6>
            <h6>Attack Range: {championData.attackrange}</h6>
            <h6>Attack Speed Per Level: {championData.attackspeedperlevel}</h6>
            <h6>Move Speed: {championData.movespeed}</h6>
            <h6>Mpper Level: {championData.mpperlevel}</h6>
            <h6>
              Videogame Versions:
              {championData.videogame_versions.map((item) => (
                <li>{item}</li>
              ))}
            </h6>
            <h6>Health: {championData.hp}</h6>
            <h6>Magic Penetration: {championData.mp}</h6>
            <h6>Spell Block: {championData.spellblock}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
