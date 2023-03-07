console.log("reached");

const validate = () => {
  var email = document.getElementById("exampleInputEmail1").value;
  var password = document.getElementById("exampleInputPassword1").value;
  var emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email == "") {
    alert("Email field must be filled out");
    return false;
  }
  if (!email.match(emailRegex)) {
    alert("Please enter a valid email address");
    return false;
  }

  if (password == "") {
    alert("Password field must be filled out");
    return false;
  }
};

function getname() {
  name = document.getElementById("name").value;
}

function changeimg() {
  const img = document.getElementById("imagge");
  img.src = "./image2.jpg";
}

const btn = document.getElementById("change");
btn.addEventListener("click", changeimg);
