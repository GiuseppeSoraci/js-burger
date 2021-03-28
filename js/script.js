// References
var btn = document.getElementById("button");
var burgerName = document.getElementById("name");
var ingredients = document.getElementsByClassName("ingredient-checkbox");
var displayPrice = document.getElementById("price");

// Calculate price
btn.addEventListener("click", function() {
    var name = burgerName.value.trim();

    // Check Name
    if(name.lenght === 0) {
        alert("Insert your burger's name");
    } else {

        // Add ingredients cost to base price
        var price = 50;

        for (var i = 0; i < ingredients.length; i++) {
            var ingredientsCheck = ingredients[i];
            console.log(ingredientsCheck.checked)

            if (ingredientsCheck.checked === true) {
                console.log(ingredientsCheck.value);
                // Updated price
                price += parseInt(ingredientsCheck.value);                
            }
        }
        console.log(price);
        
        // On-screen price
        displayPrice.innerHTML = price.toFixed(2);
    }
});