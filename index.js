//Test scores
var scores = [45, 50, 55, 65, 70, 75, 80, 85, 90, 95];

function missingScore(arr) {
    'use strict';
    //difference between first 2 scores and other bindings
    var diff = arr[0] - arr[1],
        index,
        missing,
        i;

    //loop through scores
    for (i = 0; i < arr.length; i += 1) {
      // if the difference between any 2 scores is different from the difference between the first 2 scores and is not out of bound
        if (arr[i] - arr[i + 1] !== diff && i + 1 !== arr.length) {
            index = i + 1;
            missing = arr[i + 1] + diff;
        }
    }
    // arr.splice(index,0,missing)
    // console.log(arr)

    //result
    return 'The missing score is ' + missing + ' found at position' + index;
}

//Function call
console.log(missingScore(scores));
