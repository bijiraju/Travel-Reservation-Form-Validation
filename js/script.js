function validate() {
    console.log("HELLO");
    let fname = document.getElementById("fullname").value;
    let emailid = document.getElementById("email").value;
    let package = document.getElementById("package").value;
    let date = document.getElementById("date").value;
    let person = document.getElementById("person").value;

    var checkBoxes = document.querySelectorAll('input[type="checkbox"]');
    var checkedOne = false;
    var radio = document.querySelectorAll('input[type="radio"]');
    var radioCheck = false;

    let regex = /^[a-z A-Z]{5,12}$/;
    let emregex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    for (var i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked) {
            checkedOne = true;
            break;
        }
    }
    for (var r = 0; r < radio.length; r++) {
        if (radio[r].checked) {
            radioCheck = true;
            break;
        }
    }

    if (fname == "") {
        document.getElementById("fullnameerror").innerHTML =
            "Name Field Cannot be empty";
        return false;
    } else if (!regex.test(fname)) {
        document.getElementById("fullnameerror").innerHTML =
            "Name field conatin only letters,min 5 to max 15 letters";
        return false;
    } else if (emailid == "") {
        document.getElementById("emailiderror").innerHTML =
            "Email Field Cannot be empty";
        return false;
    } else if (!emregex.test(emailid)) {
        document.getElementById("emailiderror").innerHTML =
            "Enter valid email id";
        return false;
    } else if (package == "") {
        document.getElementById("packageerror").innerHTML = "Select a package";
        return false;
    } else if (date == "") {
        document.getElementById("dateerror").innerHTML = "Select Date";
        return false;
    } else if (person == "") {
        document.getElementById("personerror").innerHTML =
            "Field Cannot be empty";
        return false;
    } else if (!Number(person)) {
        document.getElementById("personerror").innerHTML = "Enter Number only";
        return false;
    } else if (!checkedOne) {
        document.getElementById("availableerror").innerHTML =
            "Select Atleast one";
        return false;
    } else if (!radioCheck) {
        document.getElementById("radioerror").innerHTML = "Select Atleast one";
        return false;
    }
}
