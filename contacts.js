document.getElementById("contactForm").addEventListener("submit", function(event){

    event.preventDefault();
    
    let name = document.getElementById("name").value;
    
    alert("Thank you " + name + "! Your message has been sent. We will contact you soon.");
    
    document.getElementById("contactForm").reset();
    
    });