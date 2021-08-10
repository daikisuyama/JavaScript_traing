// 基本型の場合
let x=1;
let y=x;
x=2;
console.log(x,y);

// 参照型の場合
let data1=[0,1,2];
let data2=data1;
data1[0]=5;
console.log(data1,data2)