function PopupWithForm ({name, title, submit, isOpen, onClose, onSubmit, children}) {

  return(
    <section className={`popup popup_type_${name} ${isOpen && "popup_opened"}`} >
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>
        <button className="popup__close-icon" type="button" onClick={onClose} aria-label="Закрыть"></button>
        <form className="form" name={name} onSubmit={onSubmit}>
          {children}
          <input type="submit" className="form__submit-button" value={submit} />
        </form>
    </div>
    </section>
  )
}

export default PopupWithForm;