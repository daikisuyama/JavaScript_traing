// 分割代入（配列）
let data=[0,1,2];
let x0,x1,x2;
[x0,x1,x2]=data;
console.log(x0,x1,x2);
// スプレッド演算子を利用すると、残りの部分を配列に格納できる
let x3,x4;
[x3, ...x4]=data;
console.log(x3,x4)