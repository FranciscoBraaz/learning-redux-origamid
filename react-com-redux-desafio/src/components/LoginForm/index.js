import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchLogin } from '../../store/login';
import { ButtonSend, Container, InputLogin, LabelLogin } from './styles';

export function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(fetchLogin({ username, password }));
  }

  return (
    <Container className="animeEntry">
      <form style={{ marginTop: '20px' }} onSubmit={handleSubmit}>
        <LabelLogin htmlFor="username">Usuário</LabelLogin>
        <InputLogin
          style={{ marginBottom: '10px' }}
          type="text"
          id="username"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />

        <LabelLogin htmlFor="password">Senha</LabelLogin>
        <InputLogin
          type="password"
          id="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <ButtonSend type="submit">Entrar</ButtonSend>
      </form>
    </Container>
  );
}
