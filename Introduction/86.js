// 意図する挙動は何も出力しないこと
// 実際には、elseブロックでの処理が行われてしまう
let x=1;
let y=2;
if(x===1)
    if(y===1)console.log("xとyは共に1です");
else
    // 直前のネストされたif文に対応
    console.log("変数xは1ではありません")