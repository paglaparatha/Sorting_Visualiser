const generateArray = (size: number): number[] => {
    const ans: number[] = []
    for (let i = 0; i < size; i++) {
        ans.push(getValueInRange(5, 650))
    }
    return ans;
}

const getValueInRange = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default generateArray;