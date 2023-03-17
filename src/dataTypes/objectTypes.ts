//Array

const arr: Array<string>= ["mot","hai","ba"];
const arr1:string[] = ["a","b","c"];
const arr2:number[][] = [[1,2,3],[4,5,6],[7,8,9]];

//any
let a:any = "hello";
a = "3";
a = [2,4,6];

//tuples
const tuple: [string,string,number]= ["hantt","HaiDuong",20];

//enum
enum STATUS {PENDING, REJECTED,FULFIELD};

const trangThai1:STATUS= STATUS.PENDING;

enum CODE {A = 200 , B = 300 , C =400};
const trangThai2:CODE= CODE.C;
console.log(trangThai2);

//Functions

// const upperCase = (a: string | number )string => {
//  if (typeof a == "string"){
//     console.log(a.toLowerCase());
    
//  }
// }


