//Test scores
var scores = [45, 50, 55, 65, 70, 75, 80, 85, 90, 95];

function missingScore(arr) {
    'use strict';
    //difference between known scores and other bindings
    var last = arr.length - 3,
        diff = arr[last] - arr[last + 1],
        index,
        missing,
        i;

    //loop through scores
    for (i = 0; i < last; i += 1) {
      // if the difference between any 2 scores is different from the diff
        if (arr[i] - arr[i + 1] !== diff) {
            index = i + 1;
            missing = arr[i + 1] + diff;
        }
    }

    //result
    return 'The missing score is ' + missing + ' found at position ' + index;
}

//Function call
console.log(missingScore(scores));
