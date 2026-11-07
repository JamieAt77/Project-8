import React, { useEffect, useState } from 'react';
import ItemList from './components/ItemList';
import { fetchItems } from './services/api';

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const loadItems = async () => {
      try {
        const itemsData = await fetchItems();
        setItems(itemsData.items);
      } catch (error) {
        console.error('Failed to load items:', error);
      }
    };

    loadItems();
  }, []);

  return (
    <div className="app">
      <h1>Item List</h1>
      <ItemList items={items} />
    </div>
  );
};

export default App;
