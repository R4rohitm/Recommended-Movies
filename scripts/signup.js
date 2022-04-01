
document.querySelector("#form").addEventListener("submit", mySignUp);

var signUpArr = JSON.parse(localStorage.getItem("signUpDetails")) || [];

function mySignUp() {
    event.preventDefault();
    var name1 = document.querySelector("#name").value
    var contact1 = document.querySelector("#contact").value
    var email1 = document.querySelector("#email").value
    var pass1 = document.querySelector("#password").value

    if(name1==0 || contact1==0 || email1==0 || pass1==0){
        alert("Please enter the valid input")
    }

    var signUpObj = {
        name : name1,
        contact : contact1,
        email : email1,
        pass: pass1
    }

    signUpArr.push(signUpObj);

    localStorage.setItem("signUpDetails", JSON.stringify(signUpArr));

    document.querySelector("input[type='submit']").addEventListener("click",function(){
        window.location.href="./login.html"
    })
}