import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(
    {
    name: "",
    link: ""
    }
  );

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="root__page-wrapper">
      <Header />
      <Main 
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm
        popupTitle="Редактировать профиль"
        buttonSubmitText="Сохранить"
        name="profile-edit"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="popup__input popup__input_info_name"
          id="username"
          type="text"
          name="firstname"
          placeholder="Введите имя"
          required
          minLength="2"
          maxLength="40"
          autoComplete="off"
        />
        <span className="error-message username-error"></span>
        <input
          className="popup__input popup__input_info_profession"
          id="profession"
          type="text"
          name="profession"
          placeholder="Напишите о себе"
          required
          minLength="2"
          maxLength="200"
          autoComplete="off"
        />
        <span className="error-message profession-error"></span>
      </PopupWithForm>

      <PopupWithForm
        popupTitle="Новое место"
        buttonSubmitText="Создать"
        name="new-card"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="popup__input popup__input_name_card"
          id="cardname"
          type="text"
          name="cardName"
          placeholder="Название"
          required
          minLength="2"
          maxLength="30"
          autoComplete="off"
        />
        <span className="error-message cardname-error"></span>
        <input
          className="popup__input popup__input_name_link"
          id="cardlink"
          type="url"
          name="cardLink"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="error-message cardlink-error"></span>
      </PopupWithForm>

      <PopupWithForm
        popupTitle="Обновить аватар"
        buttonSubmitText="Сохранить"
        name = "change-avatar"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="popup__input"
          id="avatarLink"
          type="url"
          name="avatarLink"
          placeholder="Ссылка на картинку аватара"
          required
        />
        <span className="error-message avatarLink-error"></span>
      </PopupWithForm>

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
