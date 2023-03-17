// // Generics
// function showStringData(a: string): string {
//     return a
// }
// function showNumberData(a: number): number {
//     return a
// }
// function showData<T>(a: T): T {
//     return a
// }
// showData<string>("string")
// const arrNum = [1,2,3,5,8,13] //Fibonacci
// const arrStr = ["Quang","Quy","Hau","Duc"] //Fibonacci
// function we17304_map(arr: number[], callback: (item: number) => number): number[] {
//     let temp = []
//     for(let i = 0; i < arr.length; i++) {
//         const newItem = callback(arr[i])
//         temp.push(newItem)
//     }
//     return temp
// }
// function we17304_map<T>(arr: T[], callback: (item: T) => T): T[] {
//     let temp = []
//     for(let i = 0; i < arr.length; i++) {
//         const newItem = callback(arr[i])
//         temp.push(newItem)
//     }
//     return temp
// }
// const result = we17304_map(arrStr, (item) => {
//     return item + " - we17304"
// })
// console.log(result);
var arrNum2 = [13, 1, 3, 5, 8, 2];
var arrStr2 = ["ce", "q", "a", "d"];
// arrNum2.sort((a, b) => {
//     return a - b;
// }
// )
function selectionSort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length - 1; j++) {
            if (arr[i] > arr[j]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}
// const arrSort = function (arr: number[], callback?: (item: number) => number) {
// }
function selection(arr, callBack) {
    var _a;
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (callBack(arr[j], arr[i]) < 0) {
                _a = [arr[i], arr[j]], arr[j] = _a[0], arr[i] = _a[1];
            }
        }
    }
    return arr;
}
function ascendingOrder(item, item2) {
    return item - item2;
}
selection(arrNum2, ascendingOrder);
console.log(arrNum2);
//   arrStr1.sort();
arrStr2.sort().reverse();
console.log(arrStr2);
selectionSort(arrNum2);
console.log(arrNum2);
