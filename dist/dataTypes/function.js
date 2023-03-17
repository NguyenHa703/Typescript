//1. Function declaration 
function func1() {
    console.log("Function1");
}
var func2 = function () {
    console.log("Function2");
};
var func3 = function () {
    console.log("Function3");
};
//2. Function return
function func4() {
    return;
}
function sum(a) {
    return a;
}
function func5() {
    console.log("Hello world");
}
function func6() {
    while (true) {
    }
}
function func7() {
    var error = new Error("Spmething went wrong!");
    throw error;
}
//3. Function parameter
function divide(a, b) {
    if (b === void 0) { b = 0; }
    if (b) {
        return a - b;
    }
    else {
        return a;
    }
}
function divide2(a, b) {
    if (b === void 0) { b = 0; }
    return a - b;
}
divide(10);
// 4. Rest parameter
var showClasses = function (name) {
    var classes = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        classes[_i - 1] = arguments[_i];
    }
    return "Sinh vi\u00EAn ".concat(name, " h\u1ECDc l\u1EDBp ").concat(classes.join(", "));
};
console.log(showClasses("Anh Ngọc", "Typescript", "Nodejs"));
console.log(showClasses("Hào", "Typescript"));
//5. Callback
// const num_arr = [5, 6, 7];
// const temp = num_arr.map((item) => {
//     return item * 2;
// })
// const we17304_map = function (arr: number[], callback?: (item: number) => number) {
//     const temp = [];
//     for (let i = 0; i < arr.length; i++) {
//         const newItem = callback(arr[i])
//     }
//     return temp;
// }
// const result = we17304_map(num_arr, (item) => {
//     return item * item
// })
// console.log(result);
