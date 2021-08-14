import React from 'react';
import "./sortDetails.css"

export default class SortDetails extends React.Component {
    render () {
        return (
            <div className="App">
                <div id="sort-description-container">
                    <div>
                        <h2>Merge Sort</h2>
                        <div class="bigo-compornent">
                            <tr>
                                <td>
                                    <div>worst</div>
                                    <span>O(n log n)</span>
                                </td>
                                <td>
                                    <div>best</div>
                                    <span>O(n log n)</span>
                                </td>
                                <td>
                                    <div>average</div>
                                    <span>O(n log n)</span>
                                </td>
                                <td>
                                    <div>space</div>
                                    <span>O(n)</span>
                                </td>
                            </tr>
                        </div>
                        <p>Merge sort works by splitting the input in half, recursively sorting each half, and then merging the sorted halves back together.</p>
                    </div>
                    <div>
                        <h2>Quick Sort</h2>
                        <div class="bigo-compornent">
                            <tr>
                                <td>
                                    <div>worst</div>
                                    <span>O(n^2)</span>
                                </td>
                                <td>
                                    <div>best</div>
                                    <span>O(n log n)</span>
                                </td>
                                <td>
                                    <div>average</div>
                                    <span>O(n log n)</span>
                                </td>
                                <td>
                                    <div>space</div>
                                    <span>O(log n)</span>
                                </td>
                            </tr>
                        </div>
                        <p>Quicksort works by recursively dividing the input into two smaller arrays around a pivot item: one half has items smaller than the pivot, the other has larger items.</p>
                    </div>
                    <div>
                        <h2>Selection Sort</h2>
                        <div class="bigo-compornent">
                            <tr>
                                <td>
                                    <div>worst</div>
                                    <span>O(n^2)</span>
                                </td>
                                <td>
                                    <div>best</div>
                                    <span>O(n^2)</span>
                                </td>
                                <td>
                                    <div>average</div>
                                    <span>O(n^2)</span>
                                </td>
                                <td>
                                    <div>space</div>
                                    <span>O(1)</span>
                                </td>
                            </tr>
                        </div>
                        <p>Selection sort works by repeatedly "selecting" the next-smallest element from the unsorted array and moving it to the front.</p>
                    </div>
                    <div>
                        <h2>Insertion Sort</h2>
                        <div class="bigo-compornent">
                            <tr>
                                <td>
                                    <div>worst</div>
                                    <span>O(n^2)</span>
                                </td>
                                <td>
                                    <div>best</div>
                                    <span>O(n)</span>
                                </td>
                                <td>
                                    <div>average</div>
                                    <span>O(n^2)</span>
                                </td>
                                <td>
                                    <div>space</div>
                                    <span>O(1)</span>
                                </td>
                            </tr>
                        </div>
                        <p>Insertion sort works by inserting elements from an unsorted array into a sorted subsection of the array, one item at a time.</p>
                    </div>
                </div>
            </div>
        )
    }
}