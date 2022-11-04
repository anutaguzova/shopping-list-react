import React from "react";

const ButtonDelete = ({DeleteOne}) => {
  return (   
         <div className="close" onClick={DeleteOne}> &otimes;</div>
  );
};

export default ButtonDelete;