import {updateDiv, updateDivSwap, wrapFunction} from "../sortVisualizer/sortVisualizer.jsx";
import * as constants from '../constants.js';


export function insertionSort(array, divs, speed) {
    let funcQueue = [];
    
    for (let i = 1; i < array.length; i++) {
        funcQueue.push(wrapFunction(updateDiv, this, [divs[i], constants.red, speed]))

        let current = array[i];

        let j = i-1;
        while (j > -1 && current < array[j]) {
            array[j+1] = array[j];
            funcQueue.push(wrapFunction(updateDiv, this, [divs[j], constants.yellow, speed]))
            funcQueue.push(wrapFunction(updateDivSwap, this, [divs[j + 1], divs[j], constants.green, speed]))
            j--;
            // funcQueue.push(wrapFunction(updateDiv, this, [divs[j + 1], constants.yellow, speed, array[j]]))
        }
        array[j+1] = current;
        // funcQueue.push(wrapFunction(updateDiv, this, [divs[j + 1], constants.green, speed, current]))
    }
    return funcQueue
}

// export function insertionSort(array, divs, speed) {
//     for (let i = 1; i < array.length; i++) {
//         updateDiv(divs[i], constants.red, speed);

//         let current = array[i];

//         let j = i-1;
//         while (j > -1 && current < array[j]) {
//             array[j+1] = array[j];
//             updateDiv(divs[j + 1], constants.green, speed, array[j]);
//             j--;
//             updateDiv(divs[j + 1], constants.yellow, speed, array[j]);
//         }
//         array[j+1] = current;
//         updateDiv(divs[j + 1], constants.green, speed, current);
//     }
// }