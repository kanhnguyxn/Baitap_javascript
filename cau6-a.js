function a(){
    alert(b())
}
function b(){
    var ran = setTimeout(Math.random(),1000);
    return ran;
}

