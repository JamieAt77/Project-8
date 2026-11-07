import React, { useEffect, useState } from 'react';
import { fetchItems } from '../services/api';

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const loadItems = async () => {
      try {
        const response = await fetchItems();
        setItems(response.items);
      } catch (error) {
        console.error('Failed to fetch items:', error);
      }
    };

    loadItems();
  }, []);

  return (
    <div>
      <h2>Item List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
