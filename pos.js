$(function(){

var  menu = [
  {item: "burger", price: 4.45},
  {item: "fries", price: 2.75},
  {item: "shake", price: 3.25},
  {item: "onion-rings", price:2.15}
];

function displayPrice(priceInCents) {
    var priceString = String(priceInCents);
    while (priceString.length < 3) {
        priceString = "0" + priceString;
    }
    var displayString = "$";
    displayString += priceString.slice(0, priceString.length - 2);
    displayString += ".";
    displayString += priceString.slice(priceString.length - 2);
    return displayString;
}

if (prompt("Would you like to add an item to the menu? Enter 'yes' or 'no'!)").toUpperCase() == "YES"){
  menu.push({item: prompt("Please enter the name of the food").toLowerCase(), price: Number(prompt("How much does it cost? (Enter #s and decimal points only :)!"))});
  $("#build-menu").append($("<li>").append($("<button>").addClass("food").attr("id", menu[menu.length-1].item).text(menu[menu.length-1].item+" $"+menu[menu.length-1].price)));

}else {
  alert("Proceed with customer order");
}

var quantities = {};
for (var i = 0; i < menu.length; i++) {
    quantities[menu[i].item] = 0;
}

// quantities = {
//     "burger": 0,
//     "fries": 0,
//     "shake": 0
// }

$('.food').click(function(){
    for (var i = 0; i < menu.length; i++) {
        if (this.id == menu[i].item){
          var $itemLi, $quantInput, $priceLi, $totalCost;
          quantities[this.id]++;
          if (quantities[this.id] === 1) {
              $itemLi = $('<li>').text(this.id).attr("id", menu[i].item + "-itemLi");
              $('#food-ordered').append($itemLi);
              /* Creates ordered menu item. */

              $quantInput = $('<input>').attr("type", "number").attr("id", menu[i].item + "-quantInput").val(quantities[this.id]);
              $("#quantities").append($quantInput).append($('<br>'));
              /* Creates quantity form and enters 1. */

              $priceLi = $('<li>').prepend('$').append($('<input>').attr("type", "number")
              .attr('step', '0.01').attr("id", menu[i].item + "-priceInput").val(menu[i].price));
              $("#prices").append($priceLi);
              /* Creates '$', input form, and places a price in with hundredths decimal. */

              $totalLiInput = $('<li>').prepend('$').append($('<input>').attr("type", "number")
              .attr('step', '0.01').attr("id", menu[i].item + "-totalLiInput").val($quantInput.val()*$priceLi.find("input").val()));
              // console.log("$quantInput.val():", $quantInput.val());
              // console.log("$priceLiInput.find('input').val():", $priceLiInput.find("input").val());
              /* Creates '$', input form, and places a total price in with hundredths decimal. */

              $("#qntxprice").append($totalLiInput);
                // $quantInput = $('<input>').attr("type", "number")
                // .id = menu[i].item + "-quantInput";
                // $priceLi = $('<li>')
                // .id = menu[i].item + "-priceLi";
                // $('#prices').append($priceLi);
                // $('#food-ordered').append($('<li>').text(menu[i].item));
                // $('#prices').append($('<li>').text(displayPrice(menu[i].price)));
                /* Adds the total form to the ul #qntxprice (quantity * price). */

            } else { /* If quantity is greater than 1. */
              $quantInput = $("#" + menu[i].item + "-quantInput");
              $quantInput.val(quantities[this.id]); /* Reassigns quantity box to current quantity. */
              var $priceInput = $("#" + menu[i].item + "-priceInput");
              $totalLiInput = $("#" + menu[i].item + "-totalLiInput");
              $totalLiInput.val($quantInput.val()*$priceInput.val());
              // console.log("$priceInput:", $priceInput);
              // console.log('$priceInput.val():', $priceInput.val());
              // console.log('$quantInput:', $quantInput);
              // console.log('$quantInput.val():', $quantInput.val());
              /* Reassigns boxes and updates values (Quantity * Price) = Total. */
            }
              // console.log("$quantInput:", $quantInput);
              // console.log("$quantInput.val()", $quantInput.val());
              // $priceLi = $('#prices').find('#' + menu[i].item + '-priceLi');

            // $priceLi.text(displayPrice(menu[i].price * quantities[this.id]));
            // break;
        }

        // $totalCost += $("#" + menu[i].item + "-totalLiInput").val();
        $("#qntxprice input").each(function(sums) {
        //     var sum = 0;
            sums += $(this).val();
            $("#pay-me").val(sums);
        });
    // $('#quantities').append('<input type="text"><br>').val(quantity);
}

});

// $("#qntxprice input").each(function(sums) {
//     sums += $(this).val();
//     $("#pay-me").val(sums);
// });

// $('#SUBMIT').click(function(){
//
// }):

});
//davidjosephkoenig@gmail.com
