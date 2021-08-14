import {updateDiv, updateDivSwap, wrapFunction} from "../sortVisualizer/sortVisualizer.jsx";
import * as constants from '../constants.js'

export function selectionSort(array, divs, speed){
  let funcQueue = [];
  const len = array.length;

  for (let i = 0; i < len; i++) {
    let min = i;

    for (let j = i + 1; j < len; j++) {
      funcQueue.push(wrapFunction(updateDiv, this, [divs[j - 1], constants.yellow, speed]));
      funcQueue.push(wrapFunction(updateDiv, this, [divs[j - 1], constants.green, speed]));
      funcQueue.push(wrapFunction(updateDiv, this, [divs[j], constants.yellow, speed]));
      funcQueue.push(wrapFunction(updateDiv, this, [divs[j], constants.green, speed]));

      if (array[min] > array[j]) {
        min = j;
      }
    }

    if (min !== i) {
      funcQueue.push(wrapFunction(updateDiv, this, [divs[min], constants.red, speed]));
      funcQueue.push(wrapFunction(updateDiv, this, [divs[i], constants.red, speed]));

      let tmp = array[i];
      array[i] = array[min];
      funcQueue.push(wrapFunction(updateDivSwap, this, [divs[i], divs[min], constants.red, speed]));
      array[min] = tmp;

      funcQueue.push(wrapFunction(updateDiv, this, [divs[i], constants.green, speed]));
      funcQueue.push(wrapFunction(updateDiv, this, [divs[min], constants.green, speed]));
    }

    funcQueue.push(wrapFunction(updateDiv, this, [divs[i], constants.green, speed])) // the part where sorted part is completed
  }
  return funcQueue
}