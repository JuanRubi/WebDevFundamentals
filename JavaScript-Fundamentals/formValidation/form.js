
// Simple form validation.

function formValidation()
{
    var username = document.getElementById("userName");
    var value = username.value;

    if(value != "Juan")     // Validating username.
    {
        var messageOutputed = document.getElementById("validationMessage");
        messageOutputed.style.color = "red";
        messageOutputed.innerHTML = "Incorrect username.";

        username.select();  // Selects text in input. Could use focus() which inserts
                            // line to continue typing in input box.

        return false;   // If username is incorrect we return false.
    }
}

document.getElementById("submit").onclick = function() {
    var checkForm = formValidation();

    if(checkForm == false)    // Prevents the form from being submitted if form filled incorrectly.
    {
        return false;
    }
}