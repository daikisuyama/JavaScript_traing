/* try{
    例外の発生し得る処理
}catch(例外情報を受け取る変数…Errorオブジェクト){
    例外発生時の処理
}finally{
    例外の有無に関わらず実行される処理
} */

let i=1;
try{
    i=i*j;
}catch(e){
    console.log(e.message);
}finally{
    console.log("処理は完了しました");
}