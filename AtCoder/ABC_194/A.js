// node A.js で実行
// 必要なモジュールはいちいちインストールしなければいけないっぽい
// npm install モジュール名
// ここでは、readline-sync,requireをグローバルとしてインストール
// npm install -g モジュール名
// モジュール名が正しくないと、変なのがインストールされる
// 調べてたけど、node.js側ではimport文は動かないっぽい？
// requireでやるべきっぽい
// import readlineSync from "readline-sync";
// "export NODE_PATH=$HOME/.nodebrew/current/lib/node_modules"が必要なだけ
// 多分モジュールへのパスがなかったんだと思う（実際上記のパスに格納されていた）
// これで漸く理解した
// AtCoderでは、readline-syncが使えないみたい

// inputに入力データ全体が入る
// 入力の終了はctrl+D
function Main(input) {
	// 1行目がinput[0], 2行目がinput[1], …に入る
	input = input.split("\n");
    let a,b;[a,b]=input[0].split(" ").map((x)=>{return parseInt(x,10)});
    if(a+b>=15 && b>=8){
        console.log(1);
    }else if(a+b>=10 && b>=3){
        console.log(2);
    }else if(a+b>=3){
        console.log(3);
    }else{
        console.log(4);
    }
}

// 標準入出力から一度に読み込み、Mainを呼び出す
// このような使い方がJavaScriptの思想に合うのかは知らん
Main(require("fs").readFileSync("/dev/stdin", "utf8"));