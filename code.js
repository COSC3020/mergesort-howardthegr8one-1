function mergesort(arr) {
    if (arr.length < 2) return arr;

    let half = Math.floor(arr.length / 2);

    for (let size = 1; size <= half; size += size) {
        let step = 2*size;
        for (let j = size; j <= arr.length-1; j+=step) {
            let leftBound = (j-1) - size;
            let rightBound = j + size;
            merge(arr, leftBound, rightBound, (j-1), j)
        }
        let newSize = 2*size
        if (newSize > half) merge(arr,  (newSize-1-newSize), arr.length, (newSize-1), newSize)
    }
    return arr
}

function merge(arr, leftBound, rightBound, i, j) {
    if (arr[i] == arr[j]) return;

    let rVal = j, lVal = i;

    while (arr[rVal] < arr[lVal]) {
        let tmp = arr[j];
        arr[j] = arr[i];
        arr[i] = tmp;

        let prev = (i - 1)
        while (arr[prev] > arr[i] && prev > leftBound) {
            tmp = arr[prev];
            arr[prev] = arr[i];
            arr[i] = tmp;
            i--;
            prev--;
        }

        let next = (j + 1)
        while (arr[next] < arr[j] && next < rightBound) {
            tmp = arr[next];
            arr[next] = arr[j];
            arr[j] = tmp;
            j++;
            next++;
        }
        i = lVal, j = rVal
    }
}
