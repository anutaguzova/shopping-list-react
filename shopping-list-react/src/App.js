import React from 'react';
import { useState } from 'react';
import './App.css';
import InputItem from './components/InputItem';
import ShopList from './components/ShopList';

const App = ({AddOne}) => {
  const [items, setItems] = useState(["bread", "milk", "meat"]);
  return (
    <div>
    <h1> Shopping list </h1>
    <div className='list-container'>
      <InputItem handleSubmit={(item) => !items.includes(item) ? setItems(items.concat(item)) : false} />
      <ShopList items={items} />
    </div>
    </div>
  );
};


export default App;
