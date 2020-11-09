function loneNumber(nmbrs: number[]) {
const setUnico = new Set(nmbrs);

    return [...setUnico];
}

console.log(loneNumber([1,1,2,2,3,3,4,4,5]))
console.log(loneNumber([1,1,2,2,3,3,4,5,5]))
console.log(loneNumber([1,1,2,2,3,4,4,5,5]))
console.log(loneNumber([1,1,2]))
console.log(loneNumber([1,2,2]))

function loneNumber2(nmbrs: number[]) {
    let i = 0;
    for (i = 0; i <= nmbrs; i++) {

console.log(loneNumber([1,1,2,2,3,3,4,4,5]))
console.log(loneNumber([1,1,2,2,3,3,4,5,5]))
console.log(loneNumber([1,1,2,2,3,4,4,5,5]))
console.log(loneNumber([1,1,2]))
console.log(loneNumber([1,2,2]))