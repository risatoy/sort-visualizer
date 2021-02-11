# Sort Visualizer
Web app built using React to visualize sorting algorithms such as merge sort, quick sort, selection sort, and insertion sort. 

Deployed and available at https://risatoy.github.io/sort-visualizer/

## Table of contents
* [Technologies](#technologies)
* [Setup](#setup)
* [Algorithms](#algorithms)


## Technologies
Project is created with:
* React Framework
* Javascript
* HTML/CSS

## Setup
To run this project, install it locally using npm:
```
$ cd ../sort-visualizer
$ npm install
$ npm start
```

## Algorithms
### Merge Sort
This algorithm divide the input array into two in the same length
until the point where the arrays can no longer be divided.
When the array size become 1 (can't divide any longer), it will start merging by comparing the numbers in the same array
and replacing the smaller number on left.

Time Complexity: O(n log n)

### Quick Sort
This algorithm use a pivot that randomly picked from the input array. Using the pivot,
it will part the rest of the numbers into two groups; numbers smaller than pivot and numbers bigger than pivot.
Then, it will place them like below

[numbers smaller than pivot] pivot [numbers bigger than pivot]

This continues until inside the [] become all sorted.

Time Complexity: O(n log n) but worst case O(n^2)

### Selection Sort

### Insertion Sort
