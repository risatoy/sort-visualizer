import React from 'react';
import {mergeSort} from '../sortAlgorithms/mergeSort.js';
import {quickSort} from '../sortAlgorithms/quickSort.js';
import {selectionSort} from '../sortAlgorithms/selectionSort.js';
import {insertionSort} from '../sortAlgorithms/insertionSort.js';
import './sortVisualizer.css';

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
    }

    componentDidMount() {
        this.generateArray();
        this.generateDivs();
    }

    generateArray() {
//         let array = [17, 39, 28, 6];
        let array = []
        for (let i = 0; i < 10; i++) {
            array.push(randomIntFromInterval(5, 100));
        }
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
            arrayBars[i].style.height = `${this.state.array[i] * 2}px`;
        }
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

    mergeSort() {
        if (processes.length === 0) {
            delay = 0;
            mergeSort(this.state.array, 0, this.state.array.length - 1, this.state.divs, ANIMATION_SPEED_MS);
        }
    }

    quickSort() {
        if (processes.length === 0) {
            delay = 0;
            quickSort(this.state.array, 0, this.state.array.length - 1, this.state.divs, ANIMATION_SPEED_MS);
        }
    }

    selectionSort() {
        if (processes.length === 0) {
            delay = 0;
            selectionSort(this.state.array, this.state.divs, ANIMATION_SPEED_MS);
        }
    }

    insertionSort() {
        if (processes.length === 0) {
            delay = 0;
            insertionSort(this.state.array, this.state.divs, ANIMATION_SPEED_MS);
        }
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
            <selection className="container-box">
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
            </selection>
            <selection className="bars container-box" id="visualizer-container">
                {array.map((value, idx) => (
                    <div className='bar'
                     key={idx}
                     style={{height: `${value*2}px`}}>
                    </div>
                ))}
            </selection>
            <button id="button" onClick={() => this.resetArray()}>GENERATE NEW ARRAY</button>
            <selection className="container-box">
                <button id="button"onClick={() => this.mergeSort()}>MERGE SORT</button>
                <button id="button" onClick={() => this.quickSort()}>QUICK SORT</button>
                <button id="button" onClick={() => this.selectionSort()}>SELECTION SORT</button>
                <button id="button" onClick={() => this.insertionSort()}>INSERTION SORT</button>
{/*                 <button id="button" onClick={() => this.bubbleSort()}>BUBBLE SORT</button> */}
            </selection>
{/*             <button id="button" onClick={() => this.testSortingAlgorithms()}>TEST ALGOS</button> */}
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
    currentElement.style.height = `${height*2}px`;
    }, (delay += speed));
    processes.push(process);
}

function stopProcess() {
    while (processes.length !== 0 ) {
        clearTimeout(processes[0]);
        processes.shift();
     }
}
