//Test scores
let scores = [45, 50, 55, 65, 70, 75, 80, 85, 90, 95];

function missingScore(arr) {
  //difference between first 2 scores
  let diff = arr[0] - arr[1];
  let index, missing;

  //loop through scores
  for (let i = 0; i < arr.length; i++) {
    // if the difference between any 2 scores is different from the difference between the first 2 scores and is not out of bound
    if (arr[i] - arr[i + 1] !== diff && i + 1 !== arr.length) {
      //index becomes the position of the second score
      index = i + 1;
      //the missing score is gotten from using the original difference with the second score
      missing = arr[i + 1] + diff;
    }
  }
  // arr.splice(index,0,missing)
  // console.log(arr)

  //result
  return `The missing score is ${missing} found at position ${index}`;
}

//Function call
console.log(missingScore(scores));
