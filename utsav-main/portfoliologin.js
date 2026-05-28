
 let btn = document.getElementById("btn");

 btn.addEventListener("click", function portfolio(event) {

    event.preventDefault()

    let id = document.getElementById("id").value;

    let password = document.getElementById("password").value;

     if (id == "utsab" && password == 123) {
         window.location.href = "index.html";


     }     else {
         alert("password or username does not match")
    }

 })