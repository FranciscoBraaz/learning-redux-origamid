import React from 'react';
import { useSelector } from 'react-redux';

const filterColors = (colors) => (product) => {
  return !colors.length || colors.includes(product.color);
};

const filterPrices = (prices) => (product) => {
  return (
    (!prices.max || product.price <= prices.max) &&
    (!prices.min || product.price >= prices.min)
  );
};

function getItemsFiltered({ products }) {
  const { data, filters } = products;
  let newArray = data
    ?.filter(filterColors(filters.colors))
    .filter(filterPrices(filters.prices));
  return newArray;
}

export function Product() {
  const data = useSelector(getItemsFiltered);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>nome</th>
            <th>cor</th>
            <th>preco</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ name, color, price, id }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{color}</td>
              <td>{price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
