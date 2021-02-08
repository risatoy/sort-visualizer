import {updateDiv} from "./visualize.js"
import * as constants from '../constants.js'

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
    updateDiv(divs[prevPivot], constants.green);
  }
}

function partition(array, low, high, divs) {
  let pivot_item = array[low];

  let left = low;
  let right = high;
  while (left < right) {
    // move left while item < pivot
    while (array[left] <= pivot_item) {
      updateDiv(divs[left], constants.red);
      updateDiv(divs[left], constants.green);
      left++;
    }

    // move right while item > pivot
    while (array[right] > pivot_item) {
      updateDiv(divs[right], constants.red);
      updateDiv(divs[right], constants.green);
      right--;
    }

    if (left < right) {
      updateDiv(divs[left], constants.red);
      updateDiv(divs[right], constants.red);
      swap(array, left, right, divs);
    }
  }

  array[low] = array[right];
  updateDiv(divs[low], constants.green, array[right]);
  array[right] = pivot_item;
  if (prevPivot) {
    updateDiv(divs[prevPivot], constants.green);
  }
  updateDiv(divs[right], constants.yellow, pivot_item);

  return right;
}

function swap(array, firstPos, secondPos, divs) {
  const temp = array[firstPos];
  array[firstPos] = array[secondPos];
  updateDiv(divs[firstPos], constants.red, array[secondPos]);
  array[secondPos] = temp;
  updateDiv(divs[secondPos], constants.red, temp);

  // making the divs back to green after swap
  updateDiv(divs[firstPos], constants.green);
  updateDiv(divs[secondPos], constants.green);
}