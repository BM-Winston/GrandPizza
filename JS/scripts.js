
// let button =document.getElementById("pizzaOrder");

// pizzaOrder.addEventListener("click", validateUserInfo);

// function validateUserInfo(e) {
//     e.preventDefault();
//     alert("Thanks for placing your order. Check total price.");

// }
// button.addEventListener("click", event=>{console.log("Hello World")})
// $(document).ready(function() {
//     $(".btn").click(function(event){
//         alert("Thanks");
//         event.preventDefault();
//     });
// });

$(document).ready(function () {
    $("#place-order").click(function (event) {
        alert("Thanks for your order! We are waiting for you!");
        event.preventDefault();
    });
});
