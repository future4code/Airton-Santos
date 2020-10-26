//### EXERCÍCIO 1

function isOneEdit(stringA: string, stringB: string): boolean {
if (Math.abs(stringB.length - stringA.length) > 1) return false

if (stringA.length > stringB.length) return stringA.includes(stringB)
if (stringB.length > stringA.length) return stringB.includes(stringA)

let charsDiffCount = 0
for (let i = 0; i < stringA.length; i++) {
    if (stringA[i] !== stringB[i]) charsDiffCount++
}

return charsDiffCount === 1
}

console.log(isOneEdit('banan','banana'))
console.log(isOneEdit('bananak','banana'))
console.log(isOneEdit('panana','banana'))
console.log(isOneEdit('bananaaa','banana'))

//### EXERCÍCIO 2

export const stringCompression = (input: string): string => {
    const substrings: string[] = [];
    let lastChar = input[0];
    let charCount = 0;

    for (const char of input) {
    if (char !== lastChar) {
        substrings.push(lastChar + charCount);
        lastChar = char;
        charCount = 0;
    }
    charCount++;
    }

    substrings.push(lastChar + charCount);
    let result = "";
    for (const key of substrings) {
    result += key;
    }

    return result.length > input.length ? input : result;
};

console.log(stringCompression('aabbb'))
console.log(stringCompression('aabcccccaaa'))
console.log(stringCompression('accurate'))
console.log(stringCompression('escola'))
console.log(stringCompression('accuraaaaaaaaaate'))