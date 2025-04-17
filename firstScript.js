const images = [
    "images/oldImages/boss.png",
    "images/oldImages/died.png",
    "images/oldImages/enemy.png",
    "images/oldImages/inventory.png",
    "images/oldImages/menu.png",
    "images/oldImages/save.png",
    "images/oldImages/tutorial.png"
  ];
  
  let index = 0;
  const group = document.getElementById("slide-group");
  
  function showSlides() {
    group.innerHTML = "";
    for (let i = 0; i < 3; i++) {
      const img = document.createElement("img");
      img.src = images[(index + i) % images.length];
      group.appendChild(img);
    }
  }
  
  function nextSlide() {
    index = (index + 3) % images.length;
    showSlides();
  }
  
  function prevSlide() {
    index = (index - 3 + images.length) % images.length;
    showSlides();
  }
  
  showSlides(); // Show initial images

//Chat prompt
 // Can you help me turn my HTML page into a modular site with external CSS and JS files, 
 // and also add a working image slideshow at the bottom that displays 3 images at a time, 
 // with Next/Prev buttons? The slideshow images are stored in images/oldImages/,
 //  and the HTML, CSS, and JS files are all in the same folder (SorcerersVoid-web). 
 // Show me the full content of index.html, style.css, and script.js after the changes.
  