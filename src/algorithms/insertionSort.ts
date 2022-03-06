import GeneratorModel from "../utils/generatorModel";

function* insertionSort(arr: number[]): Generator<GeneratorModel> {
    const size = arr.length;

    for (let i = 1; i < size; i++) {
        const key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            yield {
                arr: [...arr],
                keys: {
                    left: i,
                    right: j
                }
            }

            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }
}

export default insertionSort