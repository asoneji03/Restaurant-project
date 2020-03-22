function validateItems() {
    var name = document.forms["contact"]["name"].value;
    if (name == "" || isNaN(name)) {
        alert("Name must be filled in with a value.");
        document.forms["contact"]["name"]
           .parentElement.className = "form-group has-error";
        document.forms["contact"]["name"].focus();
        return false;

    }