function compareNumbers(a,b){
    return a - b;
}
// inputに入力データ全体が入る
function Main(input) {
    // 1行目がinput[0], 2行目がinput[1], …に入る
    input = input.split("\n");
    let h,w,n;
    [h,w,n]=input[0].split(" ").map((x)=>parseInt(x));
    // r：行、c:列、候補
    let r=new Set();
    let c=new Set();
    let card=[];
    for(let i=1;i<=n;i++){
        card.push(input[i].split(" ").map((x)=>parseInt(x)));
        r.add(card[i-1][0]);
        c.add(card[i-1][1]);
    }
    let nowr,nowc;
    [nowr,nowc]=[{},{}];
    r=Array.from(r);
    r.sort(compareNumbers);
    c=Array.from(c);
    c.sort(compareNumbers);
    for(let i=0;i<r.length;i++){
        nowr[r[i]]=i+1;
    }
    for(let i=0;i<c.length;i++){
        nowc[c[i]]=i+1;
    }
    for(let i=0;i<n;i++){
        console.log(nowr[card[i][0]],nowc[card[i][1]]);
    }

}

//標準入出力から一度に読み込み、Mainを呼び出す
Main(require("fs").readFileSync("/dev/stdin", "utf8"));