import React from 'react';

function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen && "popup_opened"}`}>
    <div className="popup__container">
      <button
        className="popup-close-button"
        type="button"
        aria-label="закрыть окно"
        onClick={props.onClose}
      >
      </button>
      <h4 className="popup__title">{props.popupTitle}</h4>
      <form
        className="popup__form"
        name={props.name}
        noValidate
      >

        {props.children}

        <button
          className="popup__button-save"
          type="submit"
        >
        {props.buttonSubmitText}</button>
      </form>
    </div>
  </div>
  );
}

export default PopupWithForm;