// 仕事AとBに一人ずつ
// 一人ずつで任意の場合or一人で両方
// 調べた限りでは32bit整数であれば普通に解けて、それを超える範囲の場合はBigintが必要？

// Mathオブジェクトが組み込みであることを知らなかった
// …：スプレッド構文気持ち良いーー

// inputに入力データ全体が入る
// 入力の終了はctrl+D

class Pair{
    constructor(a,b){
        this.a=a;
        this.b=b;
    }
    sum(){
        return this.a+this.b;
    }
}

function Main(input) {
	// 1行目がinput[0], 2行目がinput[1], …に入る
	input = input.split("\n");
    let n=input[0];
    let x=[];
    for(let i=1;i<=n;i++){
        let a,b;
        [a,b]=input[i].split(" ").map((i)=>{return parseInt(i,10)});
        x.push(new Pair(a,b));
    }
    let ans=1<<30;
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            ans=Math.min(ans,Math.max(x[i].a,x[j].b),Math.max(x[i].b,x[j].a),x[i].sum(),x[j].sum());
        }
    }
    console.log(ans);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));