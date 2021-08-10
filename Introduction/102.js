let x=1,y=0;
try{
    if(y==0){throw new Error("0除算です");}
    let z=x/y;
}catch(e){
    console.log(e.message);
}