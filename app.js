// function signup() {

//     let username = document.getElementById('userName');
//     let userpass = document.getElementById('userPass');
//     let useremail = document.getElementById('userEmail');

//     let userdetails = {
//         username : username.value,
//         userpass : userpass.value,
//         useremail : useremail.value
//     }
//     localStorage.setItem("userdetails", JSON.stringify(userdetails));
//     if (useremail === "" && userpass === "" && username === "") {
//         alert("please fill all items")

//     } else {
//         window.location.href = ("login.html");
//         alert("Account has been created");
//         username.value = "";
//         userpass.value = "";
//         useremail.value = "";

//     }
// }



// function onLogin() {
//     // get input values
//     let useremail = document.getElementById("userEmail");
//     let userpass = document.getElementById("userPass");

//     var user = {
//         useremail: useremail,
//         userpass: userpass,
//     }

//     var users = JSON.parse(localStorage.getItem("users")) || [];
//     // get indx
//     var currentUser = users.find(function (val) {
//         return val.useremail.toLowerCase() === user.useremail.toLowerCase() && val.userpass === user.userpass;
//     });

//     if (currentUser) {
//         localStorage.setItem("user", JSON.stringify(currentUser));
//         // user login
//         location.href = "home.html";
//     }
// }
//      else {
//         useremail.innerHTML = "Invalid credentials";
//     }
    



// let username = document.getElementById('userName');
// let useremail = document.getElementById('userEmail');
// let userpass = document.getElementById('userPass');

// console.log(username)
// console.log(useremail)
// console.log(userpass)

function signup(){

    let username =   document.getElementById("userName").value;
    let password =   document.getElementById("userPass").value;
    let useremail =  document.getElementById("userEmail").value;

localStorage.setItem("name1", username)
localStorage.setItem("email1", useremail)
localStorage.setItem("pass1", password)

document.getElementById("userName").value="";
document.getElementById("userEmail").value="";
document.getElementById("userPass").value="";

alert("Sign up Successfully");




// if (useremail === "" && userpass === "" && username === "") {
//             alert("please fill all items")
    
//         } else {
//             window.location.href = ("login.html");
//             alert("Account has been created");
//             username.value = "";
//             userpass.value = "";
//             useremail.value = "";
    
//         }

}

function onLogin(){
    let email = document.getElementById("userEmail").value;
    let password = document.getElementById("userPass").value;

    let email1 = localStorage.getItem("email1");
    let pass1 = localStorage.getItem("pass1");

    if(email === email1  && password === pass1){
        window.location.href="home.html"
    }else{
        alert("Email & password is incorrect")
    }

}



