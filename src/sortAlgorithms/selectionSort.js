import {updateDiv} from "./visualize.js"
import * as constants from '../constants.js'

export function selectionSort(array, divs){
    const len = array.length;

  for (let i = 0; i < len; i++) {
    let min = i;

    for (let j = i + 1; j < len; j++) {
      updateDiv(divs[j - 1], constants.yellow);
      updateDiv(divs[j - 1], constants.green);
      updateDiv(divs[j], constants.yellow);
      updateDiv(divs[j], constants.green);

      if (array[min] > array[j]) {
        min = j;
      }
    }

    if (min !== i) {
      updateDiv(divs[min], constants.red);
      updateDiv(divs[i], constants.red);

      let tmp = array[i];
      array[i] = array[min];
      updateDiv(divs[i], constants.red, array[min]);
      array[min] = tmp;
      updateDiv(divs[min], constants.red, tmp);

      updateDiv(divs[i], constants.green);
      updateDiv(divs[min], constants.green);
    }

    updateDiv(divs[i], constants.green) // the part where sorted part is completed
  }
}