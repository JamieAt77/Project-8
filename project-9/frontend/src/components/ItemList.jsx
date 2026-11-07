import React, { useEffect, useState } from 'react';
import { fetchItems } from '../services/api';
import Item from './Item';

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchAndSetItems = async () => {
      try {
        const response = await fetchItems();
        setItems(response.items);
      } catch (error) {
        console.error('Failed to fetch items:', error);
      }
    };

    fetchAndSetItems();
  }, []);

  return (
    <div className="item-list">
      <h2>Items</h2>
      <ul>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
