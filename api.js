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

    const signMethod = {
      method: "POST",
      headers: myHeader,
      body: reqBody,
    };

    const url = "http://localhost:4000/api/bycauths";

    fetch(url, signMethod)
      .then((response) => response.json())
      .then((result) => {
        
        console.log(result);
        if (result.token) {
          localStorage.setItem("token", result.token);
          setTimeout(() => {
              location.href = "allproducts.html";
          }, 3000);
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