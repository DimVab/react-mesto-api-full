import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({onAddPlace, isOpen, onClose}) {

  const [name, setName] = React.useState('');
  const [placeUrl, setPlaceUrl] = React.useState('');

  React.useEffect(() => {
    setName('');
    setPlaceUrl('');
  }, [isOpen]);

  function handleChangeName (e) {
    setName(e.target.value);
  }

  function handleChangePlaceUrl (e) {
    setPlaceUrl(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name,
      link: placeUrl
    });
  }

  return(
    <PopupWithForm
    name="add-image"
    title="Новое место"
    submit="Создать"
    isOpen={isOpen}
    onClose={onClose}
    onSubmit={handleSubmit}>
      <div className="form__input-container">
        <input type="text" className="form__input form__input_type_name-of-card" id="name-of-card-input" placeholder="Название" name="name" minLength="2" maxLength="30" required value={name} onChange={handleChangeName} />
        <span className="form__input-error name-of-card-input-error"></span>
      </div>
      <div className="form__input-container">
        <input type="url" className="form__input form__input_type_url" id="avatar-url-input" placeholder="Ссылка на картинку" name="link" required value={placeUrl} onChange={handleChangePlaceUrl} />
        <span className="form__input-error avatar-url-input-error"></span>
      </div>
  </PopupWithForm>
  )
}

export default AddPlacePopup;