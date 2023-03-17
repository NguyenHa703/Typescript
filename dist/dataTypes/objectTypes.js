//Array
var arr = ["mot", "hai", "ba"];
var arr1 = ["a", "b", "c"];
var arr2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
//any
var a = "hello";
a = "3";
a = [2, 4, 6];
//tuples
var tuple = ["hantt", "HaiDuong", 20];
//enum
var STATUS;
(function (STATUS) {
    STATUS[STATUS["PENDING"] = 0] = "PENDING";
    STATUS[STATUS["REJECTED"] = 1] = "REJECTED";
    STATUS[STATUS["FULFIELD"] = 2] = "FULFIELD";
})(STATUS || (STATUS = {}));
;
var trangThai1 = STATUS.PENDING;
var CODE;
(function (CODE) {
    CODE[CODE["A"] = 200] = "A";
    CODE[CODE["B"] = 300] = "B";
    CODE[CODE["C"] = 400] = "C";
})(CODE || (CODE = {}));
;
var trangThai2 = CODE.C;
console.log(trangThai2);
//Functions
// const upperCase = (a: string | number )string => {
//  if (typeof a == "string"){
//     console.log(a.toLowerCase());
//  }
// }
