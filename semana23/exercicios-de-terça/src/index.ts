//Exercício 1

const findFirstRecurringCharacter = (input: string): string | null => {
    const charHashMap: { [index: string]: boolean } = {};
    for (const char of input) {
    if (charHashMap[char] === true) {
        return char;
    }
    charHashMap[char] = true;
    }
    return null;
};

//RESPOSTA: O(n)

//Exercício 2

export const func = (
    source: string,
    comparison: string
): boolean => {
    if (
    comparison.length > source.length + 1 ||
    comparison.length < source.length - 1
    ) {
    return false;
    }
    let commonCharQuantity = 0;

    for (const char of comparison) {
    if (source !== comparison) {
        commonCharQuantity++;
    }
    }
    return (
    commonCharQuantity <= source.length + 1 &&
    commonCharQuantity >= source.length - 1
    );
};

//RESPOSTA: O(n)

//Exercício 3

export const replaceMatrixValue = (
    matrix: number[][],
    rowIndex: number,
    columnIndex: number,
    value: number
): void => {
    if (
    matrix[rowIndex] === undefined ||
    matrix[rowIndex][columnIndex] === undefined
    ) {
    throw new Error("Fora do intervalo da matriz");
    }

    matrix[rowIndex][columnIndex] = value;
};

//RESPOSTA: O(1)

//Exercício 4

function verifyIfExistRepeatedNumbers(listOfNumbers: number[]): boolean {
    for (let i = 0; i < listOfNumbers.length; i++) {
    if (listOfNumbers.indexOf(listOfNumbers[i]) !== i) {
        return true;
    }
    }
    return false;
}

//RESPOSTA: O(n²)

//Exercício 5
//RESPOSTA: ordem de complexidade: Exercício 3, Exercício 1, Exercício 2, Exercício 4