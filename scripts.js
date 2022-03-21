class selectPizza{
    constructor(size, toppings, crust, quantity)
    {this.size=size;
    this.toppings=toppings;
    this.crust=crust;
    this.quantity=quantity;
}

}


$(document).ready(function () {
    $("#place-order").click(function (event) {
        alert("Thanks for your order! We are waiting for you!");
        event.preventDefault();
    });
});

