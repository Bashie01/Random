function spliceMe(arr1, arr2, n) {
  let newArray = arr2.slice(); //makes a copy of arr2 so that the original array is not modified [4, 5, 6]

  for (let i = 0; i < arr1.length; i++) {
    //loops through arr1 and adds each element to newArray [4, 5, 6, 1, 2, 3]
    newArray.splice(n + i, 0, arr1[i]); //inserts the element of arr1 at index n + i in newArray [4, 5, 6, 1, 2, 3]
  }
  return newArray; //returns the new array [4, 5, 6, 1, 2, 3]
}

spliceMe([1, 2, 3], [4, 5, 6], 3); //calls the function spliceMe with the arguments [1, 2, 3], [4, 5, 6], 3

console.log(spliceMe([1, 2, 3], [4, 5, 6], 3)); // [4, 5, 6, 1, 2, 3]

// new function below

function spliceAndSliceFor(arr1, arr2, n) {
  //function spliceAndSliceFor with parameters arr1, arr2, n
  let newArray = []; //creates an empty array to store the new array

  for (let i = 0; i < arr2.length; i++) {
    //loops through arr2 and adds each element to newArray
    newArray.push(arr2[i]); //adds the element of arr2 to newArray [4, 5, 6]
  }

  for (let i = 0; i < arr1.length; i++) {
    //loops through arr1 and adds each element to newArray
    newArray.push(arr1[i]); //adds the element of arr1 to newArray [4, 5, 6, 1, 2, 3]
  }

  for (let i = n; i < arr2.length; i++) {
    //loops through arr2 starting from index n
    newArray.push(arr2[i]); //adds the element of arr2 to newArray [4, 5, 6, 1, 2, 3]
  }
  return newArray; //returns the new array [4, 5, 6, 1, 2, 3]
}

console.log(spliceAndSliceFor([1, 2, 3], [4, 5, 6], 3)); // [4, 5, 6, 1, 2, 3]
