document.addEventListener("DOMContentLoaded", function() {
    // Get references to navbar items
    let homeLink = document.getElementById("home");
    let aboutLink = document.getElementById("about");
    let servicesLink = document.getElementById("services");
    let contactLink = document.getElementById("contact");
  
    // Add click event listeners
    homeLink.addEventListener("click", function() {
      window.location.href = "home.html";
    });
  
   aboutLink.addEventListener("click",function(){
    window.location.href="about.html";
   });
   servicesLink.addEventListener("click",function(){
    window.location.href="service.html"

   });
   contactLink.addEventListener("click",function(){
    contactLink.location.href="contect.html";

    });

  document.addEventListener("DOMContentLoaded", function() {
    let applyButton = document.getElementById("applyButton");
    let popup = document.getElementById("popup");
    let close = document.getElementById("close");
  
    applyButton.addEventListener("click", function() {
      popup.style.display = "block";
    });
  
    close.addEventListener("click", function() {
      popup.style.display = "none";
    });
  });
});