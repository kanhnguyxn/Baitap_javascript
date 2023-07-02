function count(){
    let counter =0;
    function increase(){
        return ++counter;
    }
    return increase;
}

var increase = count();

console.log(increase());
console.log(increase());
console.log(increase());
