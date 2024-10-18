/*function message(){
    let user_name = prompt("Please enter your name");
    console.log(`Name of the user is ${user_name}`);
    confirm(`Is your name ${user_name}`);

    let confirmation = confirm(`${user_name} do you agree to our terms and conditions?`);
    if(confirmation==true){
        alert(`Hi ${user_name} welcome to our app`);
    }
    else{
        alert("Sorry, please agree to terms and conditions to use the app");
    }
}

message()*/

function addition(){
    let num1 = Number(prompt("Please enter the first value : "));
    let num2 = Number(prompt("Please enter the second value : "));
    alert(`Addition of ${num1} and ${num2} is ${num1+num2}`);
}

addition()