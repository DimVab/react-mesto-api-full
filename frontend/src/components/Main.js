import React from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main ({cards, onEditProfile, onAddPlace, onEditAvatar, onCardClick, onCardLike, onCardRemoveLike, onCardDelete}) {

  const currentUser = React.useContext(CurrentUserContext);
  const [isAvatarHovered, setAvatarHovered] = React.useState(false);

  function mouseoverAvatar () {
    setAvatarHovered(true);
  }

  function mouseoutAvatar () {
    setAvatarHovered(false);
  }

  return(
    <main className="main">

      <section className="profile main__profile">
        <div className="profile__container">
          <div className="profile__avatar-container">
            <img className={`profile__avatar ${isAvatarHovered && "profile__avatar_hovered"}`} src={currentUser.avatar} onMouseEnter={mouseoverAvatar} alt="Текущий аватар" />
            <button className={`profile__avatar-edit-icon ${isAvatarHovered && "profile__avatar-edit-icon_hovered"}`} type="button" onClick={onEditAvatar} onMouseLeave={mouseoutAvatar} aria-label="Изменить аватар"></button>
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{currentUser.name}</h1>
            <p className="profile__job">{currentUser.about}</p>
            <button className="profile__edit-button" type="button" onClick={onEditProfile} aria-label="Редактировать"></button>
          </div>
        </div>
        <button className="profile__add-button" type="button" onClick={onAddPlace} aria-label="Добавить"></button>
      </section>

      <section className="elements main__elements">
        <ul className="elements__list">

          {cards.map((card) => {
            return ( <Card
              card={card}
              key={card._id}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardRemoveLike={onCardRemoveLike}
              onCardDelete={onCardDelete}/>
            )
          })}

        </ul>
      </section>

    </main>

  )
}

export default Main;