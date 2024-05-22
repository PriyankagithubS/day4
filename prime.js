const isPrime=val=> {
    for(let factor=2;factor<=val-1;factor++){
        if(val%factor === 0){
            return false;
        }
    }
    return true;
}
const primeTill=function(n){
    let primeNumbers=[];
    for(let value=2;value<=n;value++){
        if(isPrime(value)){
            primeNumbers.push(value);
        }
    }
    return primeNumbers;
}
console.log(primeTill(200));