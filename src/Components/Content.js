import React from "react";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Content = ({ items, handleCheck, handleDelete }) => {
  const iconStyle = {
    cursor: "pointer",
    color: "red",
    marginLeft: "1rem",
    border: "1px solid #1b263b",
    padding: "0.6rem",
    borderRadius: "0.5rem",
  };
  const listStyle = {
    listStyleType: "none",
    marginTop: "1rem",
    display: "flex",
    alignItems: "center",
    border: "1px solid #f2f2f2",
    padding: "0.6rem",
    borderRadius: "0.5rem",
    backgroundColor: "#caf0f8",
  };

  const labelStyle = {
    marginLeft: "0.6rem",
    textTransform: "capitalize",
    fontSize: "1.2rem",
    color: "#001219",
  };

  return (
    <main>
      {items.length ? (
        <ul>
          {items.map((item) => {
            return (
              <li className='item' key={item.id} style={listStyle}>
                <input
                  type='checkbox'
                  checked={item.checked}
                  onChange={() => handleCheck(item.id)}
                />
                <label htmlFor='' style={labelStyle}>
                  {item.item}
                </label>
                <FaTrashAlt
                  role='button'
                  tabIndex='0'
                  style={iconStyle}
                  onClick={() => handleDelete(item.id)}
                />
              </li>
            );
          })}{" "}
        </ul>
      ) : (
        <h1>Item is deleted !!! oops</h1>
      )}
    </main>
  );
};

export default Content;
