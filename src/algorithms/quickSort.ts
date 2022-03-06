import GeneratorModel from "../utils/generatorModel";

function* partitionGenerator(arr: number[], low: number, high: number): Generator<GeneratorModel> {
    let pivot = arr[high];

    let i = low - 1;
    for (let j = low; j <= high; j++) {
        yield {
            arr: [...arr],
            keys: {
                left: high,
                right: j
            }
        }
        if (arr[j] < pivot) {
            i++;
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    yield {
        arr: [...arr],
        keys: {
            left: i + 1,
            right: high
        }
    }
    let temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
}

function partition(arr: number[], low: number, high: number): number {
    let pivot = arr[high];

    let i = low - 1;
    for (let j = low; j <= high; j++) {
        if (arr[j] < pivot) {
            i++;
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    let temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;

    return i + 1;
}

function* quickSort(arr: number[], low?: number, high?: number): Generator<GeneratorModel> {
    low = low ?? 0;
    high = high ?? arr.length - 1;

    if (low < high) {
        yield* partitionGenerator(arr, low, high);
        const pivot = partition(arr, low, high);
        yield* quickSort(arr, low, pivot - 1);
        yield* quickSort(arr, pivot + 1, high);
    }
}

export default quickSort;