import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup({onUpdateAvatar, isOpen, onClose}) {

  const avatarRef = React.useRef();

  React.useEffect(() => {
    avatarRef.current.value = "";
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value
    });
  }

  return(
    <PopupWithForm
    name="edit-avatar"
    title="Обновить аватар"
    submit="Сохранить"
    isOpen={isOpen}
    onClose={onClose}
    onSubmit={handleSubmit}>
      <div className="form__input-container">
        <input type="url" className="form__input form__input_type_url" id="image-url-input" placeholder="Ссылка на картинку" name="avatar" required ref={avatarRef} />
        <span className="form__input-error image-url-input-error"></span>
      </div>
  </PopupWithForm>
  )
}

export default EditProfilePopup;