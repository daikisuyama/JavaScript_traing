class player{
    constructor(ind,ban){
        this.ind=ind;
        this.ban=ban;
    }
}
// inputに入力データ全体が入る
function Main(input) {
    // 1行目がinput[0], 2行目がinput[1], …に入る
    let n,a,b;
    [n,b]=input.split("\n");
    n=parseInt(n,10);
    a=[];
    b=b.split(" ");
    for(let i=0;i<n;i++){
        a.push(new player(i,parseInt(b[i],10)));
    }
    a.sort((i,j)=>{return j.ban-i.ban;});
    console.log(a[1].ind+1);
}

//標準入出力から一度に読み込み、Mainを呼び出す
Main(require("fs").readFileSync("/dev/stdin", "utf8"));