import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilters, getUniqueColors } from '../store/products';

export function Filter() {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedColors, setSelectedColors] = useState([]);
  const colors = useSelector(getUniqueColors);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeFilters({ name: 'colors', value: selectedColors }));
  }, [selectedColors, dispatch]);

  useEffect(() => {
    dispatch(
      changeFilters({
        name: 'prices',
        value: { max: maxPrice, min: minPrice },
      }),
    );
  }, [maxPrice, minPrice, dispatch]);

  function handleChange({ target }) {
    if (target.checked) {
      setSelectedColors((prevState) => [...prevState, target.value]);
    } else {
      setSelectedColors(() =>
        selectedColors.filter((color) => color !== target.value),
      );
    }
  }

  function handleChecked(color) {
    return selectedColors.includes(color);
  }

  return (
    <div>
      <input
        value={minPrice}
        onChange={({ target }) => setMinPrice(target.value)}
        placeholder="Min"
        type="number"
      />
      <input
        value={maxPrice}
        onChange={({ target }) => setMaxPrice(target.value)}
        placeholder="Max"
        type="number"
      />
      {colors.map((color) => (
        <label key={color}>
          <input
            type="checkbox"
            checked={handleChecked(color)}
            value={color}
            onChange={handleChange}
          />
          {color}
        </label>
      ))}
    </div>
  );
}
