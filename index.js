let scores = [45, 50, 55, 70, 75, 80, 85, 90, 95]
let index, missing;

function missingScore(arr){
  let diff = arr[0]-arr[1]

  for (let i=0; i < arr.length; i++){
    if (arr[i]-arr[i+1] !== diff && i+1 !== arr.length){
      index = arr.indexOf(arr[i+1])
      missing = arr[i+1] + diff
    }
  }
}

missingScore(scores)


// arr.splice(index,0,missing)
// console.log(arr)

console.log(`The missing score is ${missing} found at position ${index}`)