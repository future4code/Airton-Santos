export function countNegativeNumbersInOrderedMatrix(matrix: any) {
    let numberOne = Infinity;
    let numberTwo = 0;
    
    for (let i of matrix) {
        if(i < numberOne) {
            numberOne = i
        }
        if (i > numberTwo) {
            numberTwo = i
        }
        
        for (let i = 0; i < numberOne.length; i++) {
            ;
        }
    }
}

console.log(countNegativeNumbersInOrderedMatrix([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]))