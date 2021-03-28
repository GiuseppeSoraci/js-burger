// References
var btn = document.getElementById("button");
var burgerName = document.getElementById("name");
var ingredients = document.getElementsByClassName("ingredient-checkbox");
var displayPrice = document.getElementById("price");
var addBtn = document.getElementsByClassName("ingredient-add");
var coupon = document.getElementById("coupon");

// Settings
var coupons = ["XTIUCZGE7193", "JCIOMEW2843", "KVOWQAWC9238", "HIREWRDW5364", "GTSNDWAE7054"]

// Make ingredients clickable
for (var i = 0; i < addBtn.length; i++) {
    var add = addBtn[i];

    add.addEventListener("click", function () {

        var checkbox = this.previousElementSibling;
        checkbox.checked = !checkbox.checked;
    });
}


// Calculate price
btn.addEventListener("click", function () {
    var name = burgerName.value.trim();

    // Check Name
    if (name.length === 0) {
        alert("Insert your burger's name");
    } else {

        // Add ingredients cost to base price
        var price = 50;

        for (var i = 0; i < ingredients.length; i++) {
            var ingredientsCheck = ingredients[i];

            if (ingredientsCheck.checked === true) {
                // Updated price
                price += parseInt(ingredientsCheck.value);
            }
        }

        // Coupon
        var couponCode = coupon.value;

        // Check Discount
        if (coupons.includes(couponCode)) {
            price -= price * 0.5;
        }

        // On-screen price
        displayPrice.innerHTML = price.toFixed(2);
    }
});