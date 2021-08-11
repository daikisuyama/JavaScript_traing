let num1=123;
// デフォルトは10進数のまま
console.log(num1.toString());
// 8進数の場合
console.log(num1.toString(8));

let num2=123.456;
// 有効桁数を指定して指数表記
console.log(num2.toExponential(4));
// 小数点以下の桁数を指定
console.log(num2.toFixed(10));
// 全体の桁数を指定
console.log(num2.toPrecision(10));