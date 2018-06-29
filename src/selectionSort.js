function selectionSort(arr) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])

  const findIndexOfMin = (array, startIndex) =>{
    let min = array[startIndex];
    let minIndex = startIndex;
    let index
    for ( index = startIndex; index < array.length; index++) {
      if(min > array[index]){
        min = array[index];
        minIndex = index;
      }      
    }
    return minIndex;
  }

  // console.log(arr)

    for (let index = 0; index < arr.length; index++) {
      let currentElement = arr[index];
      let minIndex = findIndexOfMin(arr, index);
      arr[index] = arr[minIndex];
      arr[minIndex] = currentElement;
    }
  return arr;
}