function validation(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    var text;

    error_message.style.padding = "10px";

    if(name.length <5){
        text = "Please Enter A Valid Name";
        error_message.innerHTML = text;
        return false;
    }


    if(subject.length <12){
        text = "Please Enter A Correct Subject";
        error_message.innerHTML = text;
        return false;
    }


    if(isNaN(phone) || phone.length != 11){
        text = "Please Enter A Valid Phone Number";
        error_message.innerHTML = text;
        return false;
    }

    if(email.indexOf("@") == -1 || email.length < 6){
        text = "Please Enter A Valid Email";
        error_message.innerHTML = text;
        return false;
    }
    if(message.length <=100){
        text = "Please Enyer More Than 100 Characters"
    }
    alert("Form Submitted Successfully!")

    return true;

}