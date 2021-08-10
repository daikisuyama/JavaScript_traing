console.log("（1）");
let arr=["A","B","C"];
console.log(delete arr[0]);
console.log(arr);
console.log(arr[1]);

console.log("（2.0）");
let obj1={x:1,y:2};
console.log(delete obj1.x);
console.log(obj1.x);

console.log("（2.1）");
let obj2={x:obj1,y:2};
console.log(delete obj2.x);
console.log(obj1);
console.log(obj2);

console.log("（3.1）");
let data1=1;
console.log(delete data1);
console.log(data1);

console.log("（3.2）");
data2=10;
console.log(delete data2);
console.log(data2);// エラー