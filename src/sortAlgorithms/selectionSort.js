import {updateDiv} from "./visualize.js"
import * as constants from '../constants.js'

export function selectionSort(array, divs, speed){
    const len = array.length;

  for (let i = 0; i < len; i++) {
    let min = i;

    for (let j = i + 1; j < len; j++) {
      updateDiv(divs[j - 1], constants.yellow, speed);
      updateDiv(divs[j - 1], constants.green, speed);
      updateDiv(divs[j], constants.yellow, speed);
      updateDiv(divs[j], constants.green, speed);

      if (array[min] > array[j]) {
        min = j;
      }
    }

    if (min !== i) {
      updateDiv(divs[min], constants.red, speed);
      updateDiv(divs[i], constants.red, speed);

      let tmp = array[i];
      array[i] = array[min];
      updateDiv(divs[i], constants.red, speed, array[min]);
      array[min] = tmp;
      updateDiv(divs[min], constants.red, speed, tmp);

      updateDiv(divs[i], constants.green, speed);
      updateDiv(divs[min], constants.green, speed);
    }

    updateDiv(divs[i], constants.green, speed) // the part where sorted part is completed
  }
}