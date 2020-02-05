let comments = document.querySelector("input[type=textarea]");
comments.addEventListener("change", function(e){
    console.log(comments.Value);
    // if(e.which===13){
    //     console.log(comments.Value);i/
    // }
})

let name= document.querySelector("input[type=text]");
name.addEventListener("change",function(e){
    console.log(name.value);
    // if(e.which===13){
    //     console.log(name.value);
    // } 
})

let track = document.querySelector("select");
track.addEventListener("change", function(){
    console.log(track.value);
})

let email = document.querySelector("input[type=email]");
email.addEventListener("change", function(){
    console.log(email.value);
})

// making password instruction visible 
let warning = document.querySelector("#hide");
let passwordInput = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirm")
let confirmWarning = document.querySelector("#confirmWarn");

passwordInput.addEventListener("focus", function(){
    // warning.style.visibility="visible";
    warning.style.display = "inline-block";
    // warning.style.color= "red";
})

passwordInput.addEventListener("change", function(){
    let passwordValidation;
    passwordValidation = /^[A-Za-z]{2,}\d*$/

    console.log(passwordInput.value);

    if(passwordValidation.test(passwordInput) != true){
        console.log("iro lon kpa!")
       
    }

    if(passwordInput.value === " "){
        warning.textContent= "You must provide a password not less than 2 characters, must not begin with a number";
        warning.style.color= "red";
    }
})

confirmPassword.addEventListener("change", function(){
    if(passwordInput.value != confirmPassword.value){
        console.log("It's not the same Ooo")
        confirmWarning.style.display="inline-block";
    } else{
        console.log("Issorite!")
    }
})
