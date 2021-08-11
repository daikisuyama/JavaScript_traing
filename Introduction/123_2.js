// シンボルの作成
let sym1=Symbol("sym"),sym2=Symbol("sym");
console.log(sym1.toString());
console.log(sym1===sym2);

// シンボルの暗黙的型変換
// console.log(sym1+"");
// console.log(sym2-0);
console.log(!!sym1);