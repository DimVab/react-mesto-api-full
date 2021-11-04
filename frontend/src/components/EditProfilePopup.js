import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup({onUpdateUser, isOpen, onClose}) {

  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleChangeName (e) {
      setName(e.target.value);
  }

  function handleChangeDescription (e) {
      setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }

  return(
    <PopupWithForm
    name="edit-profile"
    title="Редактировать профиль"
    submit="Сохранить"
    isOpen={isOpen}
    onClose={onClose}
    onSubmit={handleSubmit}>
      <div className="form__input-container">
        <input type="text" className="form__input form__input_type_name" id="name-input" placeholder="Введите своё имя" name="name" minLength="2" maxLength="40" required value={name || ''} onChange={handleChangeName} />
        <span className="form__input-error name-input-error"></span>
      </div>
      <div className="form__input-container">
        <input type="text" className="form__input form__input_type_job" id="job-input" placeholder="Ваша профессия" name="description" minLength="2" maxLength="200" required value={description || ''} onChange={handleChangeDescription} />
        <span className="form__input-error job-input-error"></span>
      </div>
    </PopupWithForm>
  )
}

export default EditProfilePopup;