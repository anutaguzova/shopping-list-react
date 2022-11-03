import React from "react";
import ButtonAdd from "./ButtonAdd";
import ButtonRemove from "./ButtonRemove";
import ButtonDelete from "./ButtonDelete";
import { useState } from "react";

const ItemList = (props) => {

const [orders, setOrders] = useState(0);

function AddOne() {
  setOrders(orders + 1);
}

function RemoveOne() {
    if(orders >=1 ) {
        setOrders(orders - 1);
    } 
  }

return (
    <li >
        <div>{props.name}</div> 
        <div className="change_container">
            <ButtonRemove RemoveOne={RemoveOne} />
            <div>{orders}</div>
            <ButtonAdd AddOne={AddOne} />
        </div>
        <div>
        <ButtonDelete />
        </div>
        
    </li> 
  )

}

export default ItemList;

