import React, { useCallback, useState } from "react";
import Visualizer from "./components/Visualizer";
import Toolbar from "./components/Toolbar";

import generateArray from "./utils/generateArray";
import GeneratorModel from "./utils/generatorModel";

import optimizedBubbleSort from "./algorithms/optimizedBubbleSort";
import mergeSort from "./algorithms/mergeSort";
import bubbleSort from "./algorithms/bubbleSort";

import "./App.scss";
import selectionSort from "./algorithms/selectionSort";
import insertionSort from "./algorithms/insertionSort";
import quickSort from "./algorithms/quickSort";

const sortingMap: {
  [key: string]: (arr: number[]) => Generator<GeneratorModel>;
} = {
  mergeSort,
  bubbleSort,
  optimizedBubbleSort,
  selectionSort,
  insertionSort,
  quickSort,
};

function App() {
  const [size, setSize] = useState<number>(100);
  const [arr, setArr] = useState<number[]>(generateArray(size));
  const [keys, setKeys] = useState({ left: -1, right: -1 });
  const [canStart, setCanStart] = useState<boolean>(true);
  const [done, setDone] = useState<boolean>(false);
  const [sortingTechnique, setSortingTechnique] = useState<string>("mergeSort");

  const onGenerateNew = useCallback(() => {
    if (canStart) {
      setDone(false);
      setArr(generateArray(size));
    }
  }, [canStart, size]);

  const onChageSize = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!canStart) return;
      setDone(false);
      setArr(generateArray(e.target.valueAsNumber));
      setSize(e.target.valueAsNumber);
    },
    [canStart]
  );

  const onChangeSortingTechnique = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      if (canStart) {
        setSortingTechnique(e.target.value);
      }
    },
    [canStart]
  );

  const onStart = useCallback(() => {
    if (!canStart) return;
    let i = 0;
    setDone(false);
    setCanStart(false);
    for (let value of sortingMap[sortingTechnique](arr)) {
      setTimeout(() => {
        setArr(value.arr);
        setKeys(value.keys);
      }, (i * 1200) / size);
      i++;
    }
    setTimeout(() => {
      setKeys({ left: -1, right: -1 });
      setCanStart(true);
      setDone(true);
    }, (i * 1200) / size);
  }, [canStart, size, done, sortingTechnique]);

  return (
    <div className="App">
      <Visualizer array={arr} done={done} {...keys} />
      <Toolbar
        size={size}
        sortingTechnique={sortingTechnique}
        onChangeSortingTechnique={onChangeSortingTechnique}
        onGenerateNew={onGenerateNew}
        onChageSize={onChageSize}
        onStart={onStart}
      />
    </div>
  );
}

export default App;
