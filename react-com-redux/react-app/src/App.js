import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogin } from './store/login';

function App() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.login.user);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(fetchLogin({ username, password }));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label style={{ display: 'block' }} htmlFor="username">
          Usuário
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <label style={{ display: 'block' }} htmlFor="password">
          Senha
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <button style={{ display: 'block', marginTop: '10px' }} type="submit">
          Entrar
        </button>
      </form>
      <h1>{data?.email}</h1>
    </div>
  );
}

export default App;
