import React from "react";

function Sign({title, name, submit, children, onSubmit}) {

  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();

    onSubmit(password, email);

    setPassword("");
    setEmail("");
  }

  function handleChangeEmail (e) {
    setEmail(e.target.value);
  }

  function handleChangePassword (e) {
    setPassword(e.target.value);
  }

  return(
    <section className="sign" >
      <h1 className="sign__title">{title}</h1>
      <form className="form form_type_sign" name={name} onSubmit={handleSubmit}>
        <div className="form__input-container form__input-container_type_sign">
          <input type="email" className="form__input form__input_type_sign" placeholder="Email" name="email" minLength="2" maxLength="30" required value={email} onChange={handleChangeEmail} />
          <input type="password" className="form__input form__input_type_sign" placeholder="Пароль" name="text" minLength="2" maxLength="30" required value={password} onChange={handleChangePassword} />
        </div>
        <input type="submit" className="form__submit-button form__submit-button_type_sign" value={submit} />
      </form>
      {children}
    </section>
  )
}

export default Sign;