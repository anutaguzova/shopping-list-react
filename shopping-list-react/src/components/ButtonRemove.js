import React from "react";

const ButtonRemove = ({ RemoveOne }) => {
  return (   
         <button onClick={RemoveOne} className="btn btn-primary">
    remove
    </button>
  );
};

export default ButtonRemove;