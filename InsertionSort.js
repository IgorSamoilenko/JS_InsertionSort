//InsertionSort
let arr = new Array(50);
for ( let i = 0; i < arr.length; i++ ) {
    arr[i] = Math.round(Math.random()*1000);
}
console.log("Unsorted array");
console.log(arr);
const insertionSort = array => {
    for (let i = 1; i < array.length; i++) {
        const current = array[i];
        let j = i;
        while (j > 0 && array[j - 1] > current) {
            array[j] = array[j - 1];
            j--;
        }
        array[j] = current;
    }
    console.log("Sorted array");
    console.log(arr);
    return arr;
};
insertionSort(arr);

