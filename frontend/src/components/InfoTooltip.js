function InfoTooltip ({isOpen, onClose, isOk}) {

  return(
    <section className={`popup popup_type_status ${isOpen && "popup_opened"}`} >
      <div className="popup__container popup__container_type_status">
        <div className={`popup__status ${isOk ? "popup__status_ok" : "popup__status_error"}`}></div>
        <h2 className="popup__title popup__title_type_status">{isOk ? "Вы успешно зарегистрировались!" : "Что-то пошло не так! Попробуйте ещё раз."}</h2>
        <button className="popup__close-icon" type="button" onClick={onClose} aria-label="Закрыть"></button>
      </div>
    </section>
  )
}

export default InfoTooltip;