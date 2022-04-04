import React from 'react';
import api from '../utils/Api';
import Card from './Card';

function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getProfile(), api.getInitialCards()])
      .then(([userData, cardsData]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar)
        setCards(cardsData);
    })
    .catch(err => console.log(err));
  }, []);

  return (
    <main className="content container">

      <section className="profile">
        <button
          className="profile__image"
          type="button"
          aria-label="открыть окно редактирования аватара профиля"
          onClick={props.onEditAvatar}
          style={{ backgroundImage: `url(${userAvatar})` }}
        >
        </button>
        <div className="profile__content">
          <div className="profile__content-element-flex">
            <h1 className="profile__title">
              {userName}
            </h1>
            <button
              className="profile__edit-popup"
              type="button"
              aria-label="открыть окно редактирования данных профиля"
              onClick={props.onEditProfile}
            >
            </button>
          </div>
          <p className="profile__subtitle">
            {userDescription}
          </p>
        </div>
        <button
          className="profile__button-plus"
          type="button"
          aria-label="кнопка добавления новой карточки"
          onClick={props.onAddPlace}
        >
        </button>
      </section>

      <section className="photo-grid">
        <ul className="photo-grid__list">
          {cards.map(item =>
            <Card
              card={item}
              onCardClick={props.onCardClick}
              key={item._id}
            />
          )}
        </ul>
      </section>

    </main>
  );
}

export default Main;