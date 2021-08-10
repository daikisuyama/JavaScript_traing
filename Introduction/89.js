let num=1;
switch(num){
    // 複数の値で同じ処理を行いたい
    case 1:
    case 2:
    case 3:
        console.log("1or2or3");
        break;
    case 4:
        console.log("4");
        break;
    default:
        console.log("err");
        break;
}