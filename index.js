    
function send(){
    var arr = document.getElementsByTagName('input');
    var userName = arr[0].value;
    var email   = arr[1].value;
    var password = arr[2].value;
    var confirmPassword = arr[3].value;
    if(userName == ""){
        alert('Please fill username!');
    }
    else if(email == ""){
        alert('Please fill email!');
    }
    else if(password == ""){
        alert('Please fill password!');
    }
    else if(confirmPassword == ""){
        alert('Please fill confirmPassword!');
        return;
    }
    if(password != confirmPassword){
        alert('Incorrect password!');
        return;
    }
    if(userName.length < 10){
        alert('Username > 10 characters ');
        return;
    }
}




