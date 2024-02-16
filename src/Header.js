// Header.jsx

import React from 'react';
import { useState } from 'react';
import TodoLists from './ToDoLists';
import './App.css'; // Import the CSS file

const Header = () => {
  const [inputList, setInputList] = useState('');
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });

    setInputList('');
  };

  const deleteItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="container">
      <div>
        <br />
        <h1>Todo's List</h1>
        <br />
        <input
          type="text"
          className="input-field"
          placeholder="Add Items..."
          value={inputList}
          onChange={itemEvent}
        />
        <button className="add-button" onClick={listOfItems}>
          Add
        </button>

        <div>
          {Items.map((itemval, index) => (
            <TodoLists
              key={index}
              id={index}
              text={itemval}
              onSelect={deleteItems}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
