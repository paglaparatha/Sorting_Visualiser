import GeneratorModel from "../utils/generatorModel";

function* optimizedBubbleSort(arr: number[]): Generator<GeneratorModel> {
    const size = arr.length;
    for (let i = 0; i < size - 1; i++) {
        let swaps = 0;
        for (let j = 0; j < size - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                arr[j] = arr[j] ^ arr[j + 1];
                arr[j + 1] = arr[j] ^ arr[j + 1];
                arr[j] = arr[j] ^ arr[j + 1];
                swaps++;
            }
            yield {
                arr: [...arr], keys: {
                    left: j, right: j + 1
                }
            };
        }
        if (swaps === 0)
            break;
    }
}

export default optimizedBubbleSort;