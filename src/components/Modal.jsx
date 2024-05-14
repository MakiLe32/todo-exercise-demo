import { createPortal } from "react-dom";
import { useRef } from "react";

export default function Modal({ onSelect, prikazModala, noviUnos, setNoviUnos }) {
  const unosRef = useRef(null);

  function handleUnos(event) {
    setNoviUnos(event.target.value);
  }

  function handleTaster(event) {
    if (event.key === "Enter") {
      onSelect();
    }
  }

  return (
    <>
      {prikazModala &&
        createPortal(
          <>
            <div id="backdrop"></div>
            <div id="modalStyle">
              <input
                ref={unosRef}
                type="text"
                value={noviUnos}
                onChange={handleUnos}
                onKeyPress={handleTaster}
              ></input>
              <button id="finalApp" onClick={onSelect}>
                Add Task
              </button>
            </div>
          </>,
          document.getElementById("modal")
        )}
    </>
  );
}
