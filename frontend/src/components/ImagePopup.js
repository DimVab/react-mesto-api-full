function ImagePopup ({card, isOpen, onClose}) {



  return(
    <section className={`popup popup_type_open-image ${isOpen && "popup_opened"}`}>
      <figure className="popup__image-container">
        <button className="popup__close-icon" type="button" onClick={onClose} aria-label="Закрыть"></button>
        <img className="popup__image" src={card.link} alt={card.name} />
        <figcaption className="popup__caption">{card.name}</figcaption>
      </figure>
    </section>
  )
}

export default ImagePopup;