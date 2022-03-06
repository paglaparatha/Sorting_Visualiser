import React, { memo } from "react";

import "./Toolbar.scss";

interface IToolbar {
  size: number;
  sortingTechnique: string;
  onChangeSortingTechnique: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onGenerateNew: () => void;
  onChageSize: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onStart: () => void;
}

const Toolbar: React.FC<IToolbar> = ({
  size,
  sortingTechnique,
  onChangeSortingTechnique,
  onGenerateNew,
  onChageSize,
  onStart,
}) => {
  return (
    <div className="Toolbar">
      <div className="Toolbar__section">
        <button className="Toolbar__btn" onClick={onGenerateNew}>
          Generate New Array
        </button>
      </div>
      <div className="Toolbar__section">
        <div className="Toolbar__btn">
          <input
            type="range"
            min={5}
            max={120}
            value={size}
            onChange={onChageSize}
          />
        </div>
      </div>
      <div className="Toolbar__section">
        <select
          className="Toolbar__btn"
          value={sortingTechnique}
          onChange={onChangeSortingTechnique}
        >
          <option value="mergeSort">Merge Sort</option>
          <option value="bubbleSort">Bubble Sort</option>
          <option value="optimizedBubbleSort">Optimized Bubble Sort</option>
          <option value="selectionSort">Selection Sort</option>
          <option value="insertionSort">Insertion Sort</option>
          <option value="quickSort">Quick Sort</option>
        </select>
      </div>
      <div className="Toolbar__section">
        <button className="Toolbar__btn" onClick={onStart}>
          Start
        </button>
      </div>
    </div>
  );
};

export default memo(Toolbar);
