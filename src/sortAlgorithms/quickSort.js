import {updateDiv, wrapFunction} from "../sortVisualizer/sortVisualizer.jsx";
import * as constants from '../constants.js'

// to store the last pivot
let prevPivot;
let funcQueue = []

export function quickSort(array, low, high, divs, speed) {
  let pivot;
  // termination condition
  if (high > low) {
    pivot = partition(array, low, high, divs, speed);
    // to store the index of the previous pivot
    prevPivot = pivot;
    quickSort(array, low, pivot - 1, divs, speed);
    quickSort(array, pivot + 1, high, divs, speed);
    funcQueue.push(wrapFunction(updateDiv, this, [divs[prevPivot], constants.green, speed]));
  }

  return funcQueue
}

function partition(array, low, high, divs, speed) {
  let pivot_item = array[low];

  let left = low;
  let right = high;
  while (left < right) {
    // move left while item < pivot
    while (array[left] <= pivot_item) {
      funcQueue.push(wrapFunction(updateDiv, this, [divs[left], constants.red, speed]));
      funcQueue.push(wrapFunction(updateDiv, this, [divs[left], constants.green, speed]));
      left++;
    }

    // move right while item > pivot
    while (array[right] > pivot_item) {
      funcQueue.push(wrapFunction(updateDiv, this, [divs[right], constants.red, speed]));
      funcQueue.push(wrapFunction(updateDiv, this, [divs[right], constants.green, speed]));
      right--;
    }

    if (left < right) {
      funcQueue.push(wrapFunction(updateDiv, this, [divs[left], constants.red, speed]));
      funcQueue.push(wrapFunction(updateDiv, this, [divs[right], constants.red, speed]));
      swap(array, left, right, divs, speed);
    }
  }

  array[low] = array[right];
  funcQueue.push(wrapFunction(updateDiv, this, [divs[low], constants.green, speed, array[right]]));
  array[right] = pivot_item;
  if (prevPivot) {
    funcQueue.push(wrapFunction(updateDiv, this, [divs[prevPivot], constants.green, speed]));
  }
  funcQueue.push(wrapFunction(updateDiv, this, [divs[right], constants.yellow, speed, pivot_item]));

  return right;
}

function swap(array, firstPos, secondPos, divs, speed) {
  const temp = array[firstPos];
  array[firstPos] = array[secondPos];
  funcQueue.push(wrapFunction(updateDiv, this, [divs[firstPos], constants.red, speed, array[secondPos]]));
  array[secondPos] = temp;
  funcQueue.push(wrapFunction(updateDiv, this, [divs[secondPos], constants.red, speed, temp]));

  // making the divs back to green after swap
  funcQueue.push(wrapFunction(updateDiv, this, [divs[firstPos], constants.green, speed]));
  funcQueue.push(wrapFunction(updateDiv, this, [divs[secondPos], constants.green, speed]));
}