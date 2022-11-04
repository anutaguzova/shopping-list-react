import React from "react";
import ButtonAdd from "./ButtonAdd";
import ButtonRemove from "./ButtonRemove";
import ButtonDelete from "./ButtonDelete";
import { useState } from "react";

const ItemList = (props) => {

const [orders, setOrders] = useState(1);

function AddOne() {
  setOrders(orders + 1);
}

function RemoveOne() {
    if(orders >= 2 ) {
        setOrders(orders - 1);
    } 
  }

function DeleteOne() {
    props.handleClick(props.name)
  }

return (
    <li >
        <div className="name">{props.name}</div> 
        <div className="change_container">
            <ButtonRemove RemoveOne={RemoveOne} />
            <div>{orders}</div>
            <ButtonAdd AddOne={AddOne} />
        </div>
        <div> 
        <ButtonDelete DeleteOne={DeleteOne} />
        </div>  
    </li> 
  )
}

export default ItemList;

