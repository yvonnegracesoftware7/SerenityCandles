function changeColor(fileName) {
    // Look for the image with the ID 'mainCandle'
    const candleImg = document.getElementById('mainCandle');
    
    // Change the source to the new file
    candleImg.src = fileName;
}

/* Add this inside Product.js */

function changeColor(imagePath) {
    const candleImage = document.getElementById("mainCandle");
    candleImage.style.opacity = "0";

    setTimeout(() => {
        candleImage.src = imagePath;
        candleImage.style.opacity = "1";
    }, 300);
}

function changeSize(size, price, button) {
    // Update text
    document.getElementById("selectedSize").innerText = size;
    document.getElementById("productPrice").innerText = "R" + price;

    // Highlight price
    const priceElement = document.getElementById("productPrice");
    priceElement.classList.add("active");

    // Remove selected class from all buttons
    const buttons = document.querySelectorAll("#sizeOptions button");
    buttons.forEach(btn => btn.classList.remove("selected"));

    // Add selected class to clicked button
    button.classList.add("selected");
}

function selectScent(button, scent) {
    let buttons = document.querySelectorAll("#scentOptions button");

    // Remove selected class from all
    buttons.forEach(btn => btn.classList.remove("selected"));

    // Add selected to clicked
    button.classList.add("selected");

    // Update text
    document.getElementById("selectedScent").innerText = "Selected scent: " + scent;
}

function showColorsMessage() {
    alert("All colours are available 🎉");
}

function showColorsMessage() {
    document.getElementById("colorPopup").style.display = "flex";
}

function closePopup() {
    document.getElementById("colorPopup").style.display = "none";
}

// Close when clicking outside
window.onclick = function(e) {
    let popup = document.getElementById("colorPopup");
    if (e.target === popup) {
        popup.style.display = "none";
    }
}