console.log("break from inner loop");
for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
        console.log(i,j);
        break;
    }
}

console.log("break from outer loop");
flag:
for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
        console.log(i,j);
        break flag;
    }
}