// 入れ子になったオブジェクトの分解
let x={hoge:1,fuga:2,other:{hogehoge:4,fugafuga:5}};
let {hoge,other,other:{hogehoge}}=x;
console.log(hoge);
console.log(other);
console.log(hogehoge);

// 変数名の別名を指定することも可能
let {hoge:hoga,other:ather,other:{hogehoge:hogahoga}}=x;
console.log(hoga);
console.log(ather);
console.log(hogahoga);