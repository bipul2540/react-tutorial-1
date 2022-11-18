import React, { useState } from "react";

const ColorChange = () => {
  const [color, setColor] = useState("");
  const containerStyle = {
    width: "300px",
    height: "300px",
    border: "2px solid gray",
    margin: "0 auto",
    background: color,
  };

  const inputStyle = {
    display: "inline-block",
    margin: "0 auto",
  };

  return (
    <div>
      <div className='container' style={containerStyle}>
        {color ? color : "Empty value"}
      </div>
      <input
        type='text'
        style={inputStyle}
        onChange={(e) => setColor(e.target.value)}
      />
    </div>
  );
};

export default ColorChange;
