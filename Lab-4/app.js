function validateform(){
    var username = document.getElementById("Username").value;
    var password = document.getElementById("Password").value;

    if(username !== "" && password !== ""){
        if(username.length >= 5 && password.length >= 8){
            alert("Login Successful!");
            if(username == "Admin" && password == "Admin@123"){
                alert("Welcome Super Admin");
            }
        }
        else{
            alert("Username should be at least 5 characters long and password should be atleast 8 characters long")
        }
    }
    else{
        alert("Username and password cannot be blank");
    }
}