let person={age:23,height:170,weight:80,name:"鈴木"};
// 宣言と代入の分離
let age,height,dream;
({age,height,dream="億万長者"}=person);
console.log(age,height,dream); 