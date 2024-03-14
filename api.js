// takes you to register page

function createAcct(event){
  event.preventDefault();
        location.href = "register.html";
  
}


// sign up
function signUp(event){
event.preventDefault();

const getSpin = document.querySelector(".round2");
getSpin.style.display = "inline-block"; 

const getName = document.getElementById("name1").value;
const getEmail = document.getElementById("email1").value;
const getPassword = document.getElementById("password1").value;
const getPhone = document.getElementById("phone1").value;


if (getName === "" || getEmail === "" || getPassword === "" || getPhone === "") {
  Swal.fire({
      icon: "info",
      text: "All Fields are Required!",
      confirmButtonColor: "#D7000F"
  })
  getSpin.style.display = "none"; 
}
else {
    const myHeader = new Headers();

    myHeader.append("Content-Type", "application/json");
    const reqBody = JSON.stringify({
        name: getName,
      email: getEmail,
      password: getPassword,
      phone: getPhone
    });

    const loginMethod = {
      method: "POST",
      headers: myHeader,
      body: reqBody,
    };

    const url = "http://localhost:4000/api/bycusers";

    fetch(url, loginMethod)
      .then((response) => response.json())
      .then((result) => {
        
        console.log(result);
        if (result.email) {
          localStorage.setItem("admin", [result]);
          setTimeout(() => {
              location.href = "account.html";
          }, 3000);

      } else {
          Swal.fire({
              icon: "info",
              text: `${result}`,
              confirmButtonColor: "#D7000F",
          });
          getSpin.style.display = "none"; 
      }
  })
  .catch(error => console.error("Error:", error));
}
      }


// login


function login(event){
event.preventDefault();

const getSpin = document.querySelector(".round");
getSpin.style.display = "inline-block";

const getEmail = document.getElementById("email").value;
const getPassword = document.getElementById("password").value;


if (getEmail === "" || getPassword === "") {
Swal.fire({
  icon: "info",
  text: "All fields are Required!",
  confirmButtonColor: "#D7000f"
})
    getSpin.style.display = "none";

} else {
    const myHeader = new Headers();

    myHeader.append("Content-Type", "application/json");
    const reqBody = JSON.stringify({
      email: getEmail,
      password: getPassword,
    });

    const loginMethod = {
      method: "POST",
      headers: myHeader,
      body: reqBody,
    };

    const url = "http://localhost:4000/api/bycauths";

    fetch(url, loginMethod)
      .then((response) => response.json())
      .then((result) => {
        
        console.log(result);
        if (result.token) {
          localStorage.setItem("token", result.token);
          setTimeout(() => {
              location.href = "allproducts.html";
            
          }, 2000);
          Swal.fire({
            icon: "info",
            text: "Login Successful",
            confirmButtonColor: "#D7000F",
        });
      } else {
          Swal.fire({
              icon: "info",
              text: `${result.error}`,
              confirmButtonColor: "#D7000F",
          });
          getSpin.style.display = "none";
      }
  })
  .catch(error => console.error("Error:", error));
}
      }



