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





      function getProducts(){
        const mentos = document.querySelector(".mentos");
      
      
      
      
        const url = "http://localhost:4000/api/products";
      
        const methodProduct = {
          method: "GET",
        };
        
      let data = []
        fetch(url, methodProduct)
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
      
            
            result.map((item) => {
              
      
              data += `
              
              <div class="col-sm-12 col-md-6 col-lg-4  mt-5">
        
                <img src="${item.image[0]}" alt=""  class="productImg">
              
                    <h6 class="mt-3">${item.name}</h6>
                    <span class="byc">${item.code}</span>
                    <p class="fashion mt-3">${item.description}</p>
                    <p class="price">$${item.price}</p>
                    <div class="starNum">
                    <div class="star">
                   
                      <span><img src="assets/star.jpg" alt=""></span>
                      <span><img src="assets/star.jpg" alt=""></span>
                      <span><img src="assets/star.jpg" alt=""></span>
                      <span><img src="assets/star.jpg" alt=""></span>
                      <span><img src="assets/halfstar.png" alt=""></span>
        
                    </div>
                    <div class="rate"><p>4.05</p></div>
                    </div>
                    <div class="d-flex mt-3">
                        <button class="btn-wish me-1"><i class="fa-regular fa-heart me-2" style="color: #BD3A3A;"></i>Wishlist</button>
                        <button class="btn-shoppingcart ml-1"><i class="fa-solid fa-cart-shopping me-2" style="color: #BD3A3A;"></i>Buy Now</button>
                        </div>
                    </div>  `
                    mentos.innerHTML = data;
            });
          
           
          });
          
      }

       