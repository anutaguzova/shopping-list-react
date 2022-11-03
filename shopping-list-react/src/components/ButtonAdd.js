import React from "react";

const ButtonAdd = ({ AddOne }) => {
  return (   
         <button onClick={AddOne} className="btn btn-primary">
     add
    </button>
  );
};

export default ButtonAdd;