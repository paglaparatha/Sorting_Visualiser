import GeneratorModel from "../utils/generatorModel";

function* mergeSort(arr: number[], low?: number, high?: number): Generator<GeneratorModel> {
    low = low ?? 0;
    high = high ?? arr.length - 1;
    if (low < high) {
        const mid = Math.floor((high + low) / 2);
        yield* mergeSort(arr, low, mid);
        yield* mergeSort(arr, mid + 1, high);
        yield* merge(arr, low, mid, high);
    }
}

function* merge(arr: number[], low: number, mid: number, high: number): Generator<GeneratorModel> {
    const m = mid - low + 1;
    const n = high - mid;

    const arr1 = [];
    const arr2 = [];

    for (let i = 0; i < m; i++)
        arr1.push(arr[low + i]);

    for (let i = 0; i < n; i++)
        arr2.push(arr[mid + 1 + i]);

    let i = 0, j = 0, k = low;

    while (i < m && j < n) {
        if (arr1[i] < arr2[j]) {
            arr[k] = arr1[i];
            yield {
                arr: [...arr], keys: {
                    left: low + i, right: mid + 1 + j
                }
            }
            i++;
        } else {
            arr[k] = arr2[j];
            yield {
                arr: [...arr], keys: {
                    left: low + i, right: mid + 1 + j
                }
            }
            j++;
        }
        k++;
    }

    while (i < m) {
        arr[k] = arr1[i];
        yield {
            arr: [...arr], keys: {
                left: low + i, right: low + i
            }
        }
        i++;
        k++;
    }

    while (j < n) {
        arr[k] = arr2[j];
        yield {
            arr: [...arr], keys: {
                left: mid + 1 + j, right: mid + 1 + j
            }
        }
        j++;
        k++;
    }
}

export default mergeSort