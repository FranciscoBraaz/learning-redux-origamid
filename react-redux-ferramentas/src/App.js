// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { Product } from './components/Product';
import './App.css';
import { Filter } from './components/Filter';
// import { Photos } from './components/Photos';
// import { addDate } from './store/date';

function App() {
  // const dispatch = useDispatch();
  // const [departure, setDeparture] = useState('');
  // const [returnDate, setReturnDate] = useState('');
  // const [togglePhotos, setTogglePhotos] = useState(false);

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   dispatch(addDate({ departure, returnDate }));
  // }

  return (
    <div>
      {/* <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="departure" style={{ marginRight: '10px' }}>
            Partida
          </label>
          <input
            type="date"
            id="departure"
            onChange={({ target }) => setDeparture(target.value)}
          />
        </p>
        <p>
          <label htmlFor="return" style={{ marginRight: '10px' }}>
            Retorno
          </label>
          <input
            type="date"
            id="return"
            onChange={({ target }) => setReturnDate(target.value)}
          />
        </p>
        <button type="submit">Enviar</button>
      </form>
      <button onClick={() => setTogglePhotos((prevState) => !prevState)}>
        Ver fotos
      </button>
      {togglePhotos && (
        <div style={{ marginTop: '10px' }}>
          <Photos />
        </div>
      )} */}
      <Filter />
      <Product />
    </div>
  );
}

export default App;
