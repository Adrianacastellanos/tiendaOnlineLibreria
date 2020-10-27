
var price_float = 0;
function computePrice() {
    var els = document.getElementsByTagName('span');

    let prop;
    // Get each attribute from a span and obtain the attribute from itemprop.
    for (var i = 0; i < els.length; i++) {
        prop = els[i].getAttribute('itemprop');

        if (prop) {
            price = els[i].innerHTML;
            break;
        }
    }
    price = price.replace('$','');  // Delete $.
    price_float += parseFloat(price); // Just add the price.
}

var amount = 0;
function buy() {
    amount += 1;
    document.getElementById("amount").innerHTML = amount;

    computePrice();
    document.getElementById("price").innerHTML = price_float;
}

function vaciarCarrito() {
    document.getElementById("amount").innerHTML = "0";
    document.getElementById("price").innerHTML = "0";
    amount = 0;
    price_float = 0;
}