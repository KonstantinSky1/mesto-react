import React from 'react';

function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <li
      className="photo-card"
    >
      <button
        className="photo-card__button-trash"
        type="button"
      ></button>
      <img
        className="photo-card__image"
        src={card.link}
        onClick={handleClick}
        alt={card.name}
      />
      <div className="photo-card__description">
        <h2 className="photo-card__title">
          {card.name}
        </h2>
        <div className="photo-card__like-counter-block">
          <button
            className="photo-card__button"
            type="button"
            aria-label="поставь лайк"
          ></button>
          <span className="photo-card__counter">
            {card.likes.length}
          </span>
        </div>
      </div>
    </li>
  );
}

export default Card;