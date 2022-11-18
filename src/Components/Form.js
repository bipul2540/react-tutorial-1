import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const Form = ({ newItem, setNewItem, handleSubmit }) => {
  return (
    <form className='form' onSubmit={handleSubmit}>
      <label htmlFor='addItem'>Add Item</label>
      <input
        type='text'
        id='addItem'
        autoFocus
        placeholder='Add Item'
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />

      <button type='submit' aria-label='Add Item'>
        <FaPlus />
      </button>
    </form>
  );
};

export default Form;
