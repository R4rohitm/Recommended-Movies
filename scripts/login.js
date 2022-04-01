
var regdUsers = JSON.parse(localStorage.getItem("signUpDetails"));


document.querySelector("#form").addEventListener("submit", formSubmit);

var form = document.querySelector("#form");

function formSubmit(event){

    event.preventDefault();
    
    var email1 = form.email.value;
    var pass1 = form.password.value;
    console.log("Email: " + email1, pass1);
    
    flag = false;
    for(var i=0; i<regdUsers.length; i++)
    {
        if(regdUsers[i].email == email1 && regdUsers[i].pass == pass1)
        {
            flag = true;
            break;
            
        }
    }
    if(flag==true)
    {
        window.location.href="./index.html"
    }
    else{
        alert("Invalid Credentials")
    }
}