// できなかった…

// 最高で何回
// i回（i>=n-1）選んだ時に連結
// i-1回目まで：n-1個の頂点を選ぶ（n-2は全部満たすように）（n-1/n）
// 補集合を考えた方が良さそう
// n-2個以下の頂点から選ぶ、n-1個以下の頂点から選ぶ
// \sum_{i=n-1}^{mugen} ((n-1/n)**(i-1)-(n-2/n)**(i-1))*(1/n)
// i回目：残りの1つの頂点（1/n）

function solve(r,n) {
    return r**(n-1)/(1-r)**2+(n-1)*r**(n-2)/(1-r);
}

function Main(input) {
	// 1行目がinput[0], 2行目がinput[1], …に入る
	input = input.split("\n");
    let n=parseInt(input[0],10);

    console.log((solve((n-1)/n,n)-solve((n-2)/n,n))*(n-1)/n);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));