// Update footer year automatically
document.addEventListener("DOMContentLoaded", function() {
    const footer = document.querySelector("footer p");
    const year = new Date().getFullYear();
    footer.innerHTML = `&copy; ${2026} Marang Thebeyame`;
});

// Add interaction to Buy Now buttons
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".buy-btn");
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            alert("Thank you for your interest! We will contact you soon.");
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    let total = 0;

    // Handle Buy Now buttons
    const buyButtons = document.querySelectorAll(".buy-btn");
    buyButtons.forEach(button => {
        button.addEventListener("click", function() {
            // Get product info
            const productCard = button.closest(".product-card");
            const productName = productCard.querySelector("h3").textContent;
            const productPrice = productCard.querySelector(".price").textContent;

            // Add to cart list
            const li = document.createElement("li");
            li.textContent = `${productName} - ${productPrice}`;
            cartItems.appendChild(li);

            // Update total
            const priceValue = parseInt(productPrice.replace("P", ""));
            total += priceValue;
            cartTotal.textContent = `Total: P{total}`;
        });
    });

    // Handle Shop Now buttons (optional)
    const shopButtons = document.querySelectorAll(".shop-btn");
    shopButtons.forEach(button => {
        button.addEventListener("click", function() {
            window.location.href = "product.html";
        });
    });
});