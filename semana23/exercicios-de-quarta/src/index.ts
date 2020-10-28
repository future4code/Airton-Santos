//Exercício 1

//a

const printNumbersA = (n: number) => {
    if (n >= 0) {
    printNumbersA(n - 1);
    console.log(n);
    }
};

//b

const printNumbersB = (n: number) => {
    if (n >= 0) {
    console.log(n);
    printNumbersB(n - 1);
    }
};

//Exercício 2

export const calculateSumToRecursive = (n: number, acc: number = 0): number => {
    if (n === 0) {
    return acc;
    }
    return calculateSumToRecursive(n - 1, acc + n);
};

console.log(calculateSumToRecursive(3));
console.log(calculateSumToRecursive(10));
console.log(calculateSumToRecursive(100));

//Exercício 3

export const calculateSumToIterative = (n: number): number => {
    let sum = 0
    for (let i = 0 ; i <= n ; i++) {
    sum += i;
    }
    return sum;
};

console.log(calculateSumToIterative(3));
console.log(calculateSumToIterative(10));
console.log(calculateSumToIterative(100));

//Exercício 4

export const printArray = (arr: number[], i: number = arr.length - 1) => {
    if (i >= 0) {
    printArray(arr, i - 1);
    console.log(`Elemento ${i}: `, arr[i]);
    }
};

const array = [1, 2, 3, 4];
printArray(array);