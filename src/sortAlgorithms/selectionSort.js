import {updateDiv} from "./visualize.js"

export function selectionSort(array, divs){
    const len = array.length;

  for (let i = 0; i < len; i++) {
    let min = i;

    for (let j = i + 1; j < len; j++) {
      updateDiv(divs[j - 1], "orange");
      updateDiv(divs[j - 1], "green");
      updateDiv(divs[j], "orange");
      updateDiv(divs[j], "green");

      if (array[min] > array[j]) {
        min = j;
      }
    }

    if (min !== i) {
      updateDiv(divs[min], "red");
      updateDiv(divs[i], "red");

      let tmp = array[i];
      array[i] = array[min];
      updateDiv(divs[i], "red", array[min]);
      array[min] = tmp;
      updateDiv(divs[min], "red", tmp);

      updateDiv(divs[i], "green");
      updateDiv(divs[min], "green");
    }

    updateDiv(divs[i], "purple")
  }
}