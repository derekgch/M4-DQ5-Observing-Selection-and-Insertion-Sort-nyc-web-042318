function insertionSort(arr) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])
  let previousIndex;
  console.log(arr)
  for (let index = 0; index < arr.length; index++) {
    previousIndex = index -1;
    let swapped = true;

    if(previousIndex > 0){
      let swapIndex = index;
      while(swapped){
        if(arr[previousIndex] > arr[swapIndex]){
          let temp = arr[previousIndex];
          arr[previousIndex] = arr[swapIndex];
          arr[swapIndex] = temp;
          swapped = true;
        }else{
          if(swapIndex < 1) swapped = false;
        }
        swapIndex--;
        previousIndex = swapIndex -1;
      }
    }
  }
  console.log(arr)
  return arr;
}
