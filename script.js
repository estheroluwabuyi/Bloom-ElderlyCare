
    //ELEMENTS
  const menuEl = document.querySelector(".mobile-nav--banner_bar");
  const mobile = document.querySelector(".mobile-nav")
  const linksEl = document.querySelector(".mobile-nav--banner_links");
  const barsImg = document.querySelector(".mobile-nav--banner_bar img");
  const logoImg = document.querySelector(".mobile-nav--banner_logo");
  const container = document.querySelector(".bgImg-img_texts");
  let introImgs = document.querySelector(".intro-imgs img");
  const fixedArrow = document.querySelector(".fixed-arrow");
  const banner =  document.querySelector(".mobile-nav--banner");
  const links = document.querySelectorAll(".mobile-nav--banner_links");
  
  //NAV BAR 
  const nav = () =>{
    menuEl.addEventListener("click", () =>{
      linksEl.classList.toggle("visible");
      logoImg.classList.toggle("hidden");
      
    if (barsImg.getAttribute("src") === "./images/menu.png") {
        barsImg.setAttribute("src", "./images/close.png")
      } else {
        barsImg.setAttribute("src", "./images/menu.png");
      };
      
    } );
    
    
  };
  nav();
  
  //The Pop up animation
  setTimeout(function() {
    container.style.animation = "welcomePopUp  5s linear"
    container.style.transform = "translate(-50%,-50%)";
  }, 2000);

//The Intro Images
let imagePaths = [
  "./images/caregiver-and-senior-smiling-heartily.jpeg",
  "./images/Caring-nurse-taking-care-of-an-elderly-man.jpg",
  "./images/red-haired-nurse-helping-a-senior.webp",
    "./images/home-caregiver-taking-care-of-elderly-woman.jpg"
];

let imageIndex = 0;

setInterval(function() {
  imageIndex = (imageIndex + 1) % imagePaths.length;

  // Fade out the image before changing the source
  introImgs.style.opacity = 0;

  // Wait for the fade out animation to complete before changing the source
  setTimeout(function() {
    introImgs.setAttribute("src", imagePaths[imageIndex]);

    // Fade in the new image after changing the source
    introImgs.style.opacity = 1;
  }, 500);

}, 4500);


const scroller = 30;
 window.addEventListener('scroll', function() {
  if (window.scrollY >= scroller) {
    linksEl.classList.remove("visible");
    logoImg.classList.remove("hidden");
    barsImg.setAttribute("src", "./images/menu.png");
  } 
});



/*links.forEach(link =>{
  link.addEventListener("click", () =>{
    links.forEach(item => {
     link.classList.toggle('color');
    });
    
  } )
  
})
*/


//The Scroll Arrow
/*function scrollToTop() {
      document.getElementById("top").scrollIntoView({ behavior: "smooth" });
    }
    
    

 window.addEventListener("scroll", () =>{
   if (window.scrollY) {
     fixedArrow.classList.remove("hidden");
   }
   else if (window.scrollTop = 0) {
     fixedArrow.classList.add("hidden");
     
   }
   
 });*/

 /*
const scrollPosition = 100;
window.addEventListener('scroll', function() {
  if (window.scrollY >= scrollPosition) {
    mobile.style.position = 'fixed';
    mobile.style.top = 0;
    mobile.style.zIndex = 1;
  } 
});
*/

/*window.addEventListener('scroll', function() {
  if (window.scrollX < scrollPosition) {
  if (barsImg.getAttribute("src") === "./images/menu.png") {
        barsImg.setAttribute("src", "./images/menu.png")
      } else {
        barsImg.setAttribute("src", "./images/menu.png");
      };
  }
});*/