import {updateDiv, wrapFunction} from "../sortVisualizer/sortVisualizer.jsx";
import * as constants from '../constants.js'

let funcQueue = [];

export function mergeSort(array, start, end, divs, speed) {
  if (start < end) {
      let mid = Math.floor((start + end) / 2);
      funcQueue.push(wrapFunction(updateDiv, this, [divs[mid], constants.yellow, speed])); // color update

      mergeSort(array, start, mid, divs, speed);
      mergeSort(array, mid + 1, end, divs, speed);

      merge(array, start, mid, end, divs, speed);
  }

  return funcQueue
}

function merge(array, start, mid, end, divs, speed) {
  let l = start;
  let r = mid + 1;

  let result = [];
  let ind = 0;

  for (let i = start; i <= end; i++) {
    if (l > mid) {
        result[ind] = array[r];
        funcQueue.push(wrapFunction(updateDiv, this, [divs[r], constants.red, speed, array[r]]));
        r += 1
    } else if (array[l] < array[r] || r > end) {
        result[ind] = array[l];
        funcQueue.push(wrapFunction(updateDiv, this, [divs[l], constants.red, speed, array[l]]));
        l += 1
    } else {
        result[ind] = array[r];
        funcQueue.push(wrapFunction(updateDiv, this, [divs[r], constants.red, speed, array[r]]));
        r += 1
    }
    ind +=1
  }

  for (let t = 0; t < ind; t++) {
    array[start] = result[t];
    funcQueue.push(wrapFunction(updateDiv, this, [divs[start], constants.green, speed, result[start]]));
    start += 1
  }
}