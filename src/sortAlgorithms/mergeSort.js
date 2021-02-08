import {updateDiv} from "./visualize.js"
import * as constants from '../constants.js'

export function mergeSort(array, start, end, divs) {
    if (start < end) {
        let mid = Math.floor((start + end) / 2);
        updateDiv(divs[mid], constants.yellow); // color update

        mergeSort(array, start, mid, divs);
        mergeSort(array, mid + 1, end, divs);

        merge(array, start, mid, end, divs);
    }
}

function merge(array, start, mid, end, divs) {
  let l = start;
  let r = mid + 1;

  let result = [];
  let ind = 0;

  for (let i = start; i <= end; i++) {
    if (l > mid) {
        result[ind] = array[r];
        updateDiv(divs[r], constants.red, array[r]);
        r += 1
    } else if (array[l] < array[r] || r > end) {
        result[ind] = array[l];
        updateDiv(divs[l], constants.red, array[l]);
        l += 1
    } else {
        result[ind] = array[r];
        updateDiv(divs[r], constants.red, array[r]);
        r += 1
    }
    ind +=1
  }

  for (let t = 0; t < ind; t++) {
    array[start] = result[t];
    updateDiv(divs[start], constants.green, result[start]);
    start += 1
  }
}