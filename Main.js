function validateContact() {
  // Here we get the text value of the name field3
  var contactFnameInput = document.getElementById("fname").value;
  var contactLnameInput = document.getElementById("lname").value;
  var contactEmailInput = document.getElementById("email").value;
  
  // Now we test to see if any text is in the field
  if (contactFnameInput.trim() === "" || contactLnameInput.trim() === "" || contactEmailInput.trim() === "") {
    alert("Whoops! You didn’t enter a name!");
    return false;
  }

  return true;
}