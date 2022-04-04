import React from 'react';

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
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
        src={props.card.link}
        onClick={handleClick}
        alt={props.card.name}
      />
      <div className="photo-card__description">
        <h2 className="photo-card__title">
          {props.card.name}
        </h2>
        <div className="photo-card__like-counter-block">
          <button
            className="photo-card__button"
            type="button"
            aria-label="поставь лайк"
          ></button>
          <span className="photo-card__counter">
            {props.card.likes.length}
          </span>
        </div>
      </div>
    </li>
  );
}

export default Card;