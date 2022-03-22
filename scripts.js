class selectPizza{
    constructor(size, topping, crust, quantity, deliveryLocation){
    this.size=size;
    this.topping=topping;
    this.crust=crust;
    this.quantity=quantity;
    this.deliveryLocation=deliveryLocation;
}

};

selectPizza.prototype.selectSizePrice = function () {
  if (this.size == "Large") {
    return 1305;
  } else if (this.size == "Medium") {
    return 975;
  } else if (this.size == "Small") {
    return 645;
  } else {
    console.log("choose an option");
  }
};

selectPizza.prototype.selectToppingPrice = function () {
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

selectPizza.prototype.selectDeliveryLocation = function () {
  if (this.deliveryLocation == "Nairobi East") {
    return 240;
  } else if (this.deliveryLocation == "Nairobi-West") {
    return 540;
  } else if (this.deliveryLocation == "Nairobi-South") {
    return 440;
  } else if (this.deliveryLocation == "Nairobi-North");
  {
    return 340;
  }
};

$(document).ready(function () {
  $("#place-order").submit(function (event) {
    event.preventDefault();
    var size = $("select#size option:selected").val();
    var topping = $("select#topping option:selected").val();s
    var crust = $("select#crust option:selected").val();
    var quantity = $("#quantity").val();
    var deliveryLocation= $("select#delivery option:selected").val();
    console.log(quantity);

    var newSelectPizza = new selectPizza(
      size,
      topping,
      crust,
      quantity,
      deliveryLocation
    );
    var totalPrice =
      (newSelectPizza.selectSizePrice() +
        newSelectPizza.selectCrustPrice() +
        newSelectPizza.selectToppingPrice() +
        newSelectPizza.selectDeliveryLocation()) *
        quantity;

    alert(
      "Order Complete! Total amount is" + " " + "ksh" + " " + totalPrice
    );
   
  });
});


// $(document).ready(function () {
//     $("#place-order").click(function (event) {
//         alert("Your Order has been received.GrandPizza thanks you!");
//         event.preventDefault();
//     });
// });

