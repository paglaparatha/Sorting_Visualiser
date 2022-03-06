import GeneratorModel from "../utils/generatorModel";

function* selectionSort(arr: number[]): Generator<GeneratorModel> {
    const size = arr.length;

    for (let i = 0; i < size - 1; i++) {
        let min_index = i;

        for (let j = i + 1; j < size; j++) {
            if (arr[j] < arr[min_index]) {
                min_index = j;
            }

            yield {
                arr: [...arr],
                keys: {
                    left: min_index,
                    right: j
                }
            }
        }

        let temp = arr[min_index];
        arr[min_index] = arr[i];
        arr[i] = temp;
    }

    yield {
        arr: [...arr],
        keys: {
            left: size - 1,
            right: size - 1
        }
    }
}

export default selectionSort;