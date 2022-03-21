class selectPizza{
    constructor(size, toppings, crust, quantity)
    {this.size=size;
    this.toppings=toppings;
    this.crust=crust;
    this.quantity=quantity;
}

}

selectPizza.prototype.selectSizePrice = function () {
  if (this.size == "Large") {
    return 1305;
  } else if (this.size == "Medium") {
    return 975;
  } else if (this.size == "Small") {
    return 645;
  } 
};

selectPizza.prototype.selectToppingsPrice = function () {
  if (
    this.toppings == "Pepperoni" ||
    this.toppings == "Supreme" ||
    this.toppings == "Hawaiian" 
    
  ) {
    return 70;
  } else {
    console.log("Choose an option");
  }
};

selectPizza.prototype.selectCrustPrice = function () {
  if (this.crust == "Crispy") {
    return 250;
  } else if (this.crust == "Stuffed") {
    return 245;
  } else if (this.crust == "Gluten-free") {
    return 240;
  } else {
    console.log("Choose an option");
  }
};
$(document).ready(function () {
    $("#place-order").click(function (event) {
        alert("Thanks for your order! We are waiting for you!");
        event.preventDefault();
    });
});

