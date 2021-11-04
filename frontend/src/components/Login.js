import Sign from './Sign';

function Login ({onLogin}) {

  return(
    <Sign
      title="Вход"
      name="sign-in"
      submit="Войти"
      onSubmit={onLogin}
    />
  )
}

export default Login;