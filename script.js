let validation1 = ()=>{

    let email_val = document.getElementById("First").value;
    let pass_val = document.getElementById("Second").value;

    if(email_val == ""){
        console.log(document.getElementById("email_error").innerHTML = "Entered Email Id or Phone Number is Incorrect.");
        return false;
    }
    else{
        console.log(document.getElementById("email_error").innerHTML = "");
    }
    if(pass_val == ""){
        console.log(document.getElementById("pass_error").innerHTML = "Please Enter a Password.");
        return false;
    } else{
        window.alert("Successfully Log In...");
    } 
    if(pass_val != ""){
        console.log(document.getElementById("pass_error").innerHTML = "");
        return false;
    }
}
