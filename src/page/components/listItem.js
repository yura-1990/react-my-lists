import React from "react";

export default function listItem(props) {
  return (
    <li className="todo__link py-2 my-3 shadow nav-link w-50 mx-auto d-flex align-items-center rounded-3 overflow-hidden">
      <button
        className="btn btn-info d-block text-white"
        onClick={props.changeTodo}
      >
        Update
      </button>
      
      <span className="text-center w-100">{props.item.name}</span>
      
      <button
        className="btn btn-danger d-block text-white ms-auto"
        onClick={props.deleteTodo}
      >
        Delete
      </button>
    </li>
  );
}
