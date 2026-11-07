import React from 'react';
importItemList from './components/ItemList.jsx';
import { fetchItems } from './services/api.js';

function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetchItems().then(data => setItems(data.items));
  }, []);

  return (
    <div className="App">
      <h1>Item List</h1>
      <ItemList items={items} />
    </div>
  );
}

export default App;
