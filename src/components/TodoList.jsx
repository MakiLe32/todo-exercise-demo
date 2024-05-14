import React from "react";
import { useState } from "react";

import Modal from "./Modal";

export default function TodoList() {
  const [zadaci, setZadaci] = useState([]);
  const [noviZadatak, setNoviZadatak] = useState("");
  const [prikaziModal, setPrikaziModal] = useState(false);

  function dodajTodo() {
    if (noviZadatak.trim() !== "") {
      setZadaci([...zadaci, { text: noviZadatak, completed: false }]);
      setNoviZadatak("");
      setPrikaziModal(false);
    }
  }

  function handleToggleTodo(index) {
    const dodatniZadatak = [...zadaci];
    dodatniZadatak[index].completed = !dodatniZadatak[index].completed;
    setZadaci(dodatniZadatak);
  }

  return (
    <div>
      <ul>
        {zadaci.map((todo, index) => (
          <li
            key={index}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
            onClick={() => handleToggleTodo(index)}
          >
            {todo.text}
          </li>
        ))}
      </ul>
      <button id="showModal" onClick={() => setPrikaziModal(true)}>
        + add
      </button>
      <Modal
        onSelect={dodajTodo}
        prikazModala={prikaziModal}
        noviUnos={noviZadatak}
        setNoviUnos={setNoviZadatak}
      />
    </div>
  );
}
