import {updateDiv} from "./visualize.js"

// to store the last pivot
let prevPivot;

export function quickSort(array, low, high, divs) {
  let pivot;
  // termination condition
  if (high > low) {
    pivot = partition(array, low, high, divs);
    // to store the index of the previous pivot
    prevPivot = pivot;
    quickSort(array, low, pivot - 1, divs,);
    quickSort(array, pivot + 1, high, divs);
    updateDiv(divs[prevPivot], "green");
  }
}

function partition(array, low, high, divs) {
  let pivot_item = array[low];

  let left = low;
  let right = high;
  while (left < right) {
    // move left while item < pivot
    while (array[left] <= pivot_item) {
      updateDiv(divs[left], "red");
      updateDiv(divs[left], "green");
      left++;
    }

    // move right while item > pivot
    while (array[right] > pivot_item) {
      updateDiv(divs[right], "red");
      updateDiv(divs[right], "green");
      right--;
    }

    if (left < right) {
      updateDiv(divs[left], "red");
      updateDiv(divs[right], "red");
      swap(array, left, right, divs);
    }
  }

  array[low] = array[right];
  updateDiv(divs[low], "green", array[right]);
  array[right] = pivot_item;
  if (prevPivot) {
    updateDiv(divs[prevPivot], "green");
  }
  updateDiv(divs[right], "orange", pivot_item);

  return right;
}

function swap(array, firstPos, secondPos, divs) {
  const temp = array[firstPos];
  array[firstPos] = array[secondPos];
  updateDiv(divs[firstPos], "red", array[secondPos]);
  array[secondPos] = temp;
  updateDiv(divs[secondPos], "red", temp);

  // making the divs back to green after swap
  updateDiv(divs[firstPos], "green");
  updateDiv(divs[secondPos], "green");
}