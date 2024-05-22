const findOdd=val=>{
        if(val%2===0){
            return false;
        }
        else{
            return true;
        }
}

const returnOdd=function(n){
    let oddNumbers=[];
    for(let value=1;value<=n;value++){
        if(findOdd(value)){
            oddNumbers.push(value);
        }
    }
    return oddNumbers;
}
console.log(returnOdd(10).join( ));