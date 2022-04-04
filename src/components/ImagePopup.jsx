import React from 'react';

function ImagePopup(props) {
  return (
  <div className={`popup popup_type_image ${props.card && "popup_opened"}`}>
    <figure className="image-popup">
      <button 
        className="popup-close-button popup-close-button_image_popup"
        onClick={props.onClose}
      ></button>
      <img
        className="image-popup__picture"
        src={props.card.link}
        alt={props.card.name}
      />
      <figcaption className="image-popup__description">
        {props.card.name}
      </figcaption>
    </figure>
  </div>
  );
}

export default ImagePopup;