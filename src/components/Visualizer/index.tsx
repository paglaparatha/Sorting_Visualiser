import React from "react";

import "./Visualizer.scss";

interface IVisualizer {
  array: number[];
  left: number;
  right: number;
  done: boolean;
}

const Visualizer: React.FC<IVisualizer> = ({ array, left, right, done }) => {
  return (
    <div className="Visualizer">
      {array.map((el, i) => (
        <div
          className={`Visualizer__bar ${
            i === left || i === right ? "Visualizer__bar--selected" : ""
          } ${done ? "Visualizer__bar--done" : ""}`}
          style={{ height: el }}
          key={i}
        ></div>
      ))}
    </div>
  );
};

export default Visualizer;
