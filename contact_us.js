function validateForm() {
    var name = document.forms["contactRestaurant"]["name"].value;
    if (name == "") {
      alert("Name must be filled out");
      document.forms["contactRestaurant"]["name"]
           .parentElement.className = "form-group has-error";
        document.forms["contactRestaurant"]["name"].focus();
      return false;
    }
  
  var email = document.forms["contactRestaurant"]["email"].value;
  if (email =="") {
      alert("Email must be filled out")
      document.forms["contactRestaurant"]["email"]
           .parentElement.className = "form-group has-error";
        document.forms["contactRestaurant"]["email"].focus();
      return false;
  }


  var phone = document.forms["contactRestaurant"]["phone"].value;
  if (phone =="") {
      alert("Phone must be filled out")
      document.forms["contactRestaurant"]["phone"]
           .parentElement.className = "form-group has-error";
        document.forms["contactRestaurant"]["phone"].focus();
      return false;

  }

var reason = document.forms["contactRestaurant"]["contact"].value;
if (contact =="") {
    alert("Reason for Inquiry must be filled out")
    document.forms["contactRestaurant"]["contact"]
         .parentElement.className = "form-group has-error";
      document.forms["contactRestaurant"]["contact"].focus();
    return false;

}
if (validateForm ="true"){
    alert("Successful Submission");
}
 }



