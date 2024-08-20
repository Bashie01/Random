function chunkArrayInGroups(arr, size) {
  let firstArr = arr.splice(0, 2);
  let secondArr = arr.splice(2, 3);

  console.log(secondArr);
  //combine both arrays?
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
