function changeColor(fileName) {
    // Look for the image with the ID 'mainCandle'
    const candleImg = document.getElementById('mainCandle');
    
    // Change the source to the new file
    candleImg.src = fileName;
}