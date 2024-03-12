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
    const profile = JSON.stringify({
      email: getEmail,
      password: getPassword,
    });

    const signMethod = {
      method: "POST",
      headers: myHeader,
      body: profile,
    };

    const url = "http://localhost:3000/api/bycauths";

    fetch(url, signMethod)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        localStorage.setItem("admin", JSON.stringify(result));

        if (result.user.hasOwnProperty("email")) {
          location.href = "Allproducts.html";
        } else {
          Swal.fire({
            icon: "info",
            text: "Login Unsuccessful!",
            confirmButtonColor: "#D7000F",
          });
          getSpin.style.display = "none";
        }
      })
      .catch((error) => console.log("error", error));
  }

}