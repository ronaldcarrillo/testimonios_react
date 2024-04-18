// import React from "react";
import "../stylesheets/card.css";

// const Card = (item) => {
const Card = ({item}) => {
console.log(item.img);
  return (
    <div className="content_block">
      <div className="block_card">
        <div id="content_img">
          <img id="img" src={`../src/assets/img/${item.img}`} />
        </div>

        <div id="detail_card">
          <div id="detail_card_text1">
            <h3><strong>{item.nombre}</strong> in {item.pais}</h3>
            <h3>{item.profesion} <strong>{item.empresa}</strong></h3>
          </div>

          <div id="detail_card_text2">
            <p>
              {item.testimonio}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Card;
