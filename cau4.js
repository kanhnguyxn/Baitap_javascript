

function checkEmail(){
    var email = document.getElementById('email');
    var type = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
    if (type.test(email.value)){
        alert('mail này hợp lệ.');
    }
    else{
        alert ('Hãy nhập địa chỉ hợp lệ=))\nví dụ: tram@gmail.com')
    }

}


