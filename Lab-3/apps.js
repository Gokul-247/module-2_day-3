function addnum(){
    var oneNumber = parseInt(document.getElementById('NumOne').value)
    var twoNumber = parseInt(document.getElementById('NumTwo').value)
    
    var addition = oneNumber+twoNumber;

    var output = `Output is ${addition}`

    document.getElementById('result').innerHTML = output
}

function subnum(){
    var oneNumber = parseInt(document.getElementById('NumOne').value)
    var twoNumber = parseInt(document.getElementById('NumTwo').value)
    
    var subtraction = oneNumber-twoNumber;

    var output = `Output is ${subtraction}`

    document.getElementById('result').innerHTML = output
}

function multnum(){
    var oneNumber = parseInt(document.getElementById('NumOne').value)
    var twoNumber = parseInt(document.getElementById('NumTwo').value)
    
    var multiplication = oneNumber*twoNumber;

    var output = `Output is ${multiplication}`

    document.getElementById('result').innerHTML = output
}

function divnum(){
    var oneNumber = parseInt(document.getElementById('NumOne').value)
    var twoNumber = parseInt(document.getElementById('NumTwo').value)
    
    var division = oneNumber/twoNumber;

    var output = `Output is ${division}`

    document.getElementById('result').innerHTML = output
}
