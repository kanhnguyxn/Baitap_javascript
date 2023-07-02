function output(){
    alert(check())
}
function check(){
    var text = document.getElementById('text');
    var regex = / /;
    if (text.value.length >= 10){
        if (!regex.test(text.value)){
            return 'Pass hop le'
            text.focus
        }
        else {return'Mat khau sai.\nCo khoang trang'}

    }
    else {return'Mat khau sai.\nDo dai nho hơn 10 ky tu'}
}
