const assert = require('assert');
/*
* Given an integer n, calculate the nth row of Pascal's triangle
*
* @param n
*	 row number of Pascal's triangle, where the first row is n = 0
*
* @return
*	an array of the nth row of Pascal's triangle,
* 	or an empty array if n is not valid
*/
const ptRow = (n) =>
{
    //checks for negative
    if (n < 0) {
        return [];
    }

    //checks for decimal
    if (Number.isInteger(n) === false) {
        return [];
    }

    const answer = [];
    const factArray = factorialArr(n);
    for (let i = 0; i <= n; i++) {
        answer[i] = (factArray[n] / (factArray[i] * factArray[n - i]));
    }

    return answer;
}

const factorialArr = (n) => {
    const arr = [];

    if (n === 0) {
        arr[0] = 1;
        return arr;
    }

    let fact = 1;
    arr[0] = fact;
    arr[1] = fact;
    for (let i = 2; i <= n; i++) {
        fact *= i;
        arr[i] = fact;
    }
    return arr;
}

const testPtRow = () => {
    // Test case 1: First row of Pascal's triangle
    const row1 = ptRow(0);
    assert.deepStrictEqual(row1, [1]);

    // Test case 2: Second row of Pascal's triangle
    const row2 = ptRow(1);
    assert.deepStrictEqual(row2, [1, 1]);

    // Test case 3: Third row of Pascal's triangle
    const row3 = ptRow(2);
    assert.deepStrictEqual(row3, [1, 2, 1]);

    // Test case 4: Fifth row of Pascal's triangle
    const row4 = ptRow(4);
    assert.deepStrictEqual(row4, [1, 4, 6, 4, 1]);

    // Test case 5: Negative input should return an empty array
    const rowNegative = ptRow(-1);
    assert.deepStrictEqual(rowNegative, []);

    // Test case 6: Decimal input should return an empty array
    const rowDecimal = ptRow(3.5);
    assert.deepStrictEqual(rowDecimal, []);

    console.log('All tests passed!');
}

testPtRow();




