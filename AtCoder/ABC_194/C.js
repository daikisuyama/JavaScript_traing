function Main(input) {
	// 1行目がinput[0], 2行目がinput[1], …に入る
	input = input.split("\n");
    let n=parseInt(input[0],10);
    let a=input[1].split(" ").map(function(i){return parseInt(i,10)});
    // pythonのreduceと同じ
    let ans=(n)*a.map((x)=>x*x).reduce((i,j)=>i+j);
    ans-=(a.reduce((i,j)=>i+j))**2;
    console.log(ans);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));