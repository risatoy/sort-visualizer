import {updateDiv} from "./visualize.js";
import * as constants from '../constants.js';

export function insertionSort(array, divs, speed) {
    for (let i = 1; i < array.length; i++) {
        updateDiv(divs[i], constants.red, speed);

        let current = array[i];

        let j = i-1;
        while (j > -1 && current < array[j]) {
            array[j+1] = array[j];
            updateDiv(divs[j + 1], constants.green, speed, array[j]);
            j--;
            updateDiv(divs[j + 1], constants.yellow, speed, array[j]);
        }
        array[j+1] = current;
        updateDiv(divs[j + 1], constants.green, speed, current);
    }
}