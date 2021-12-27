import { useDispatch, useSelector } from 'react-redux';
import { incrementar, reduzir } from './store/contador';
import { abrir, fechar } from './store/modal';

function App() {
  const { contador, modal } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{contador}</h1>
      <h2>{modal ? 'Aberto' : 'Fechado'}</h2>
      <button onClick={() => dispatch(incrementar())}>Incrementar</button>
      <button onClick={() => dispatch(reduzir())}>Reduzir</button>
      <button onClick={() => dispatch(abrir())}>Abrir Modal</button>
      <button onClick={() => dispatch(fechar())}>Fechar Modal</button>
    </div>
  );
}

export default App;
