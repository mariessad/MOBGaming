import React from "react";
function Detail({ foundGame, rFoundGame, addToCart }) {
  return (
    <>
      <div className="spaceDetail"></div>
      <h1 className="detail-title">{foundGame.name}</h1>
      <img
        className="detail-image"
        src={foundGame.background_image_additional}
        alt={foundGame.background_image}
      />
      <br />
      <input
        className="buy-btn"
        type="submit"
        value="Add to Cart"
        onClick={() => addToCart(foundGame)}
      />
      <br />
      <p className="details-date">Release date: {foundGame.released}</p>
      <div className="detail-desc-border">
        <p className="detail-desc">{foundGame.description_raw}</p>
      </div>
      <br />
      <div className="back-to-list" onClick={rFoundGame}>
        Back to List
      </div>
    </>
  );
}
export default Detail;