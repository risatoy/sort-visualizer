import {updateDiv} from "./visualize.js"
import * as constants from '../constants.js'

// to store the last pivot
let prevPivot;

export function quickSort(array, low, high, divs, speed) {
  let pivot;
  // termination condition
  if (high > low) {
    pivot = partition(array, low, high, divs, speed);
    // to store the index of the previous pivot
    prevPivot = pivot;
    quickSort(array, low, pivot - 1, divs, speed);
    quickSort(array, pivot + 1, high, divs, speed);
    updateDiv(divs[prevPivot], constants.green, speed);
  }
}

function partition(array, low, high, divs, speed) {
  let pivot_item = array[low];

  let left = low;
  let right = high;
  while (left < right) {
    // move left while item < pivot
    while (array[left] <= pivot_item) {
      updateDiv(divs[left], constants.red, speed);
      updateDiv(divs[left], constants.green, speed);
      left++;
    }

    // move right while item > pivot
    while (array[right] > pivot_item) {
      updateDiv(divs[right], constants.red, speed);
      updateDiv(divs[right], constants.green, speed);
      right--;
    }

    if (left < right) {
      updateDiv(divs[left], constants.red, speed);
      updateDiv(divs[right], constants.red, speed);
      swap(array, left, right, divs, speed);
    }
  }

  array[low] = array[right];
  updateDiv(divs[low], constants.green, speed, array[right]);
  array[right] = pivot_item;
  if (prevPivot) {
    updateDiv(divs[prevPivot], constants.green, speed);
  }
  updateDiv(divs[right], constants.yellow, speed, pivot_item);

  return right;
}

function swap(array, firstPos, secondPos, divs, speed) {
  const temp = array[firstPos];
  array[firstPos] = array[secondPos];
  updateDiv(divs[firstPos], constants.red, speed, array[secondPos]);
  array[secondPos] = temp;
  updateDiv(divs[secondPos], constants.red, speed, temp);

  // making the divs back to green after swap
  updateDiv(divs[firstPos], constants.green, speed);
  updateDiv(divs[secondPos], constants.green, speed);
}