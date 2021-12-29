import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogin, autoLogin } from './store/login';

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch]);

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
    </div>
  );
}

export default App;
