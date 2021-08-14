import React from 'react';
import {mergeSort} from '../sortAlgorithms/mergeSort.js';
import {quickSort} from '../sortAlgorithms/quickSort.js';
import {selectionSort} from '../sortAlgorithms/selectionSort.js';
import {insertionSort} from '../sortAlgorithms/insertionSort.js';
import './sortVisualizer.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedo, faStepForward, faPlay } from "@fortawesome/free-solid-svg-icons";

var ANIMATION_SPEED_MS = 10;

let delay = 0;
let processes = [];

export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
            divs: [],
        };

        this.sort = "mergeSort"

        this.funcQueue = []
        this.inProcess = false
        this.isSorted = false
    }

    componentDidMount() {
        this.generateArray();
        this.generateDivs();
    }

    generateArray() {
        let array = [4,3,2,1,2];
        // let array = []
        // for (let i = 0; i < 10; i++) {
        //     array.push(randomIntFromInterval(5, 100));
        // }
        this.setState({array});
        this.state.array = array;
    }

    generateDivs() {
        this.state.divs = document.querySelector('#visualizer-container').children;
    }

    resetArray() {
        stopProcess(); // to kill running processes
        this.generateArray()
        for (let i = 0; i < this.state.array.length; i++) {
            const arrayBars = document.getElementsByClassName('bar');
            arrayBars[i].style.backgroundColor = '#3C403D';
            arrayBars[i].style.height = `${this.state.array[i] * 10}px`;
            arrayBars[i].innerHTML = `<span>${this.state.array[i]}</span>`
        }
        this.funcQueue = []
        this.isSorted = false
        document.querySelector("#countstep").style.display = "none"
    }

    changeSpeed(speed) {
        if (speed==='2') {
            ANIMATION_SPEED_MS = 10;
        } else if (speed==='1') {
            ANIMATION_SPEED_MS = 100;
        } else {
            ANIMATION_SPEED_MS = 500;
        }
    }

    start() {
        if (this.sort === "mergeSort") this.mergeSort();
        if (this.sort === "quickSort") this.quickSort();
        if (this.sort === "selectionSort") this.selectionSort();
        if (this.sort === "insertionSort") this.insertionSort();

        while (this.funcQueue.length > 0) {
            (this.funcQueue.shift())();
        }
    }

    forward(){
        if (this.funcQueue.length === 0 && this.inProcess === false && this.isSorted === false) {
            if (this.sort === "mergeSort") this.mergeSort();
            if (this.sort === "quickSort") this.quickSort();
            if (this.sort === "selectionSort") this.selectionSort();
            if (this.sort === "insertionSort") this.insertionSort();

            document.querySelector("#countstep").style.display = "block"
            document.querySelector("#countall").innerHTML = this.funcQueue.length
        } 
        
        if (this.funcQueue.length >= 0) {
            document.querySelector("#count").innerHTML = this.funcQueue.length
            if (this.funcQueue.length === 0) {
                this.inProcess = false;
                this.isSorted = true;
            } else {
                this.inProcess = true;
                (this.funcQueue.shift())();
            }
        }
    }

    selectSort(e) {
        this.sort = e.target.value
        let sortButton = document.getElementById(e.target.id);
        let selectedButton = document.querySelector(".clicked");

        if (selectedButton) selectedButton.classList.remove("clicked");
        sortButton.classList.add("clicked");
    }

    mergeSort() {
        this.funcQueue = mergeSort(this.state.array, 0, this.state.array.length - 1, this.state.divs, ANIMATION_SPEED_MS);
        // if (processes.length === 0) {
        //     delay = 0;
        //     mergeSort(this.state.array, 0, this.state.array.length - 1, this.state.divs, ANIMATION_SPEED_MS);
        // }
    }

    quickSort() {
        this.funcQueue = quickSort(this.state.array, 0, this.state.array.length - 1, this.state.divs, ANIMATION_SPEED_MS);

        // if (processes.length === 0) {
        //     delay = 0;
        //     quickSort(this.state.array, 0, this.state.array.length - 1, this.state.divs, ANIMATION_SPEED_MS);
        // }
    }

    selectionSort() {
        this.funcQueue = selectionSort(this.state.array, this.state.divs, ANIMATION_SPEED_MS);
        // if (processes.length === 0) {
        //     delay = 0;
        //     selectionSort(this.state.array, this.state.divs, ANIMATION_SPEED_MS);
        // }
    }

    insertionSort() {
        this.funcQueue = insertionSort(this.state.array, this.state.divs, ANIMATION_SPEED_MS);
    }

//     bubbleSort() {}

//     testSortingAlgorithms() {
//         for (let i = 0; i < 100; i++) {
//             const array = [];
//             const length = randomIntFromInterval(1, 1000);
//             for (let i = 0; i < length; i++) {
//                 array.push(randomIntFromInterval(-1000, 1000));
//             }
//             const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
//             const mergeSortedArray = getMergeSortAnimations(array.slice());
//             console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray))
//         }
//     }

    render() {
        const {array} = this.state;

        return (
        <div className="App">
            <div className="container-box">
                <button class="button sortButton clicked" id="mergesort" value="mergeSort" onClick={(e) => this.selectSort(e)}>MERGE SORT</button>
                <button class="button sortButton" id="quicksort" value="quickSort" onClick={(e) => this.selectSort(e)}>QUICK SORT</button>
                <button class="button sortButton" id="selectionsort" value="selectionSort" onClick={(e) => this.selectSort(e)}>SELECTION SORT</button>
                <button class="button sortButton" id="insertsort" value="insertionSort" onClick={(e) => this.selectSort(e)}>INSERTION SORT</button>
{/*                 <button id="button" onClick={() => this.bubbleSort()}>BUBBLE SORT</button> */}
            </div>
{/*             <button id="button" onClick={() => this.testSortingAlgorithms()}>TEST ALGOS</button> */}
            <div id="control-container">
                <div>
                    <button class="button" onClick={() => this.resetArray()}><FontAwesomeIcon icon={faRedo} /></button>
                    <small class="text-muted">Generate array</small>
                </div>
                <div>
                    <button class="button" onClick={() => this.start() }><FontAwesomeIcon icon={faPlay} /></button>
                    <small class="text-muted">Run all</small>
                </div>
                <div>
                    <button class="button" onClick={() => this.forward()}><FontAwesomeIcon icon={faStepForward} /></button>
                    <small class="text-muted">Step by step</small>
                </div>
            </div>

          {/* <div className="container-box">
                <div id="slider-label" md={1}>slow</div>
                    <form id="sliderData">
                        <input id="slider"
                               type="range"
                               min="0"
                               max="2"
                               step="1"
                               onChange={e => this.changeSpeed(e.target.value)}/>
                    </form>
                <div id="slider-label" md={1}>fast</div>
            </div> */}

            <div className="bars container-box" id="visualizer-container">
                {array.map((value, idx) => (
                    <div className='bar'
                     key={idx}
                     style={{height: `${value*10}px`}}>
                    <span>{value}</span>
                    </div>
                ))}
            </div>
            <div id="countstep">Steps: <span id="count">0</span>/<span id="countall">0</span></div>
        </div>
        );
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length) return false;
    for (let i = 0; i < arrayOne.length; i++) {
        if (arrayOne[i] !== arrayTwo[i]) return false;
    }
    return true;
}

export function updateDiv(
  currentElement,
  backgroundColor,
  speed,
  height
) {
    delay++
    process = window.setTimeout(() => {
    currentElement.style.backgroundColor = backgroundColor;
    if (height) {
        currentElement.style.height = `${height*10}px`;
        currentElement.innerHTML = `<span>${height}</span>`;
    }
    }, (delay += speed));
    processes.push(process);
}

export function updateDivSwap(
    currentElement,
    swapElement,
    backgroundColor,
    speed
  ) {
      delay++
      process = window.setTimeout(() => {
        
        currentElement.style.backgroundColor = backgroundColor;
        swapElement.style.backgroundColor = backgroundColor;

        const temp = currentElement.innerText
        currentElement.style.height = `${swapElement.innerText*10}px`
        currentElement.innerHTML = `<span>${swapElement.innerText}</span>`;

        swapElement.style.height = `${temp*10}px`;
        swapElement.innerHTML = `<span>${temp}</span>`;
      }, (delay += speed));
      processes.push(process);
  }


export let wrapFunction = function(fn, context, params) {
    return function() {
        fn.apply(context, params);
    };
}

function stopProcess() {
    while (processes.length !== 0 ) {
        clearTimeout(processes[0]);
        processes.shift();
     }
}
