import React from 'react';
import { useState } from 'react';
import './App.css';
import InputItem from './components/InputItem';
import ShopList from './components/ShopList';

const App = () => {
  const [items, setItems] = useState(["bread", "milk", "meat"]);
  return (
    <div>
    <h1> Shopping list </h1>
    <div className='list-container'>
      <InputItem handleSubmit={(item) => !items.includes(item) ? setItems(items.concat(item)) : alert("You have added this product! Please, check your list!")} />
      <ShopList items={items} handleClick={(item) => { setItems(items.slice().filter((i) => i !== item))}}/>
    </div>
    </div>
  );
};


export default App;
