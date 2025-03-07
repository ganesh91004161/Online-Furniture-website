document.addEventListener("DOMContentLoaded", function () {
    const cartButtons = document.querySelectorAll(".add-to-cart");

    cartButtons.forEach(button => {
        button.addEventListener("click", function () {
            const product = this.parentElement;
            const productName = product.querySelector("h3").innerText;
            const productPrice = product.querySelector(".price").innerText;
            
            alert(`Added to Cart: ${productName} - ${productPrice}`);
        });
    });
});