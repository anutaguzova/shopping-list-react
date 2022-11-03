import React from "react";
import { useState } from "react";

const InputItem = (props) => {
  const [value, setValue] = useState('');

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      props.handleSubmit(value);
      setValue('');
    }}>
    <input type="text" value={value} onChange={e => setValue(e.target.value)}/>
    </form>
  )
  }

  export default InputItem;