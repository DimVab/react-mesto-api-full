import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card ({card, onCardClick, onCardLike, onCardRemoveLike, onCardDelete}) {

  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner === currentUser._id;
  const isLiked = card.likes.some(i => i === currentUser._id);

  function handleCardClick () {
    onCardClick(card);
  }

  function handleLikeClick () {
    if (!isLiked) {
      onCardLike(card);
    } else {
      onCardRemoveLike(card);
    }
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }


  return(
    <li className="element">
      <img className="element__image" src={card.link} onClick={handleCardClick} alt={card.name}/>
      <div className="element__container">
        <h2 className="element__name">{card.name}</h2>
        <div className="element__likes-container">
          <button className={`element__like ${isLiked && "element__like_active"}`} type="button" aria-label="Поставить лайк" onClick={handleLikeClick}></button>
          <p className="element__like-counter">{card.likes.length}</p>
        </div>
      </div>
      {isOwn && <button className="element__delete" type="button" aria-label="Удалить элемент" onClick={handleDeleteClick}></button>}
    </li>
  )
}

export default Card;