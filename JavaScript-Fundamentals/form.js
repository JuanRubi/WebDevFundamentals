
// Simple form validation.

function formValidation()
{
    var username = document.getElementById("userName");
    var value = username.value;

    if(value != "Juan")
    {
        var messageOutputed = document.getElementById("validationMessage");
        messageOutputed.style.color = "red";
        messageOutputed.innerHTML = "Incorrect username.";

        username.select();

        return false;
    }
    else 
    {
        var messageOutputed = document.getElementById("validationMessage");
        messageOutputed.style.color = "green";
        messageOutputed.innerHTML = "Welcome Juan!";

        return true;
    }
}

document.getElementById("submit").onclick = function() {
    var checkForm = formValidation();

    if(checkForm == false)
    {
        return false;
    }
}