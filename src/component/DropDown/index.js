import React, { useState, useRef, useEffect } from "react";
import SVG from "react-inlinesvg";
import { arrowUp, arrowDown } from "../../icons";
import "./style.css";

const Dropdown = () => {
  const selectItemRef = useRef();
  const [selection, setSelection] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const options = [
    {
      label: "Aberdeen",
    },
    {
      label: "Alicante",
    },
    {
      label: "Amsterdam",
    },
    {
      label: "Athens",
    },
    {
      label: "Aberdeen1",
    },
    {
      label: "Alicante2",
    },
    {
      label: "Amsterdam3",
    },
    {
      label: "Athens4",
    },
    {
      label: "Aberdeen5",
    },
    {
      label: "Alicante6",
    },
    {
      label: "Amsterdam7",
    },
    {
      label: "Athens8",
    },
    {
      label: "Aberdeen9",
    },
    {
      label: "Alicante11",
    },
    {
      label: "Amsterdam12",
    },
    {
      label: "Athens33",
    },
    {
      label: "Aberdeen44",
    },
    {
      label: "Alicante55",
    },
    {
      label: "Amsterdam66",
    },
    {
      label: "Athens88",
    },
    {
      label: "Aberdeen99",
    },
  ];

  const handleClick = (label) => {
    setSelection(label);
    setIsOpen(false);
  };
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    if (selectItemRef.current && isOpen) {
      const scrollHeight = selectItemRef.current.getBoundingClientRect();
      const container = document.getElementById("options-container");
      if (container) {
        container.scrollTo({
          top: scrollHeight.y - 200,
          behavior: "smooth",
        });
      }
    }
  }, [isOpen]);

  return (
    <div className="dropdown-container">
      <div className="des">Destination</div>
      <div className="select" onClick={handleOpen}>
        {selection || <span className="default">Please select ...</span>}
        <SVG src={isOpen ? arrowUp : arrowDown} width={24} height={24} />
      </div>
      {isOpen && (
        <div className="options" id="options-container">
          {options?.map((e, i) => {
            return (
              <div
                ref={e.label == selection ? selectItemRef : null}
                className={`opt ${e.label == selection ? "selected" : ""}`}
                onClick={() => handleClick(e.label)}
              >
                {e.label}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
