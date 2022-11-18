import "./App.css";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Counter from "./Components/Counter";
import Form from "./Components/Form";
import { useState } from "react";
import ColorChange from "./Components/ColorChange";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "one half pound bag of cocoa cover Almonds Unsalted",
    },
    {
      id: 2,
      checked: false,
      item: "item 2",
    },
    {
      id: 3,
      checked: false,
      item: "item 3",
    },
  ]);

  const [newItem, setNewItem] = useState("");
  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = { ...items, id, checked: false, item };
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
    setItems(listItems);
    console.log(item);
    console.log(items);
  };

  const handleCheck = (id) => {
    console.log(`key: ${id}`);
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );

    setItems(listItems);
    localStorage.setItem("shoppingList", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => {
      return item.id != id;
    });
    setItems(listItems);
  };

  // for  the form components

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  return (
    <div className='App'>
      {/* <Header /> */}
      {/* <Form
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      /> */}
      {/* <Counter /> */}

      <ColorChange />
    </div>
  );
}

export default App;
