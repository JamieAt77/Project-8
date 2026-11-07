import React from 'react';
import { fetchItems } from '../services/api';

const Item = ({ item }) => {
  return (
    <div className="item">
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>Price: £{item.price}</p>
    </div>
  );
};

export default Item;
