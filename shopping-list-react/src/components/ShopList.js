import React from "react";
import ItemList from "./ItemList";

const ShopList = (props) => {
    const items = props.items.map((item, index) => {
        return (item.length !== 0) ? <ItemList key={index} name={item} handleClick={props.handleClick} /> : false   
    } 
    )
    
    return (
      <ul>{items}</ul>
    )
  }

export default ShopList;