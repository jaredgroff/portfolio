/* //Mobile Navbar
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
}); */

/* ===========================================
Dark Mode 
=========================================== */

    // check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('darkmode');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('darkmode');
  // 2. Update darkMode in localStorage 
  localStorage.setItem('darkMode', null);
}
 
// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {

  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode'); 
  
  // if it not current enabled, enable it
  if (darkMode !== 'enabled') {
    enableDarkMode();
  // if it has been enabled, turn it off  
  } else {  
    disableDarkMode(); 
  }
});


/* ===========================================
Accessibility
=========================================== */

    // check for saved 'accessibilityMode' in localStorage
    let accessibilityMode = localStorage.getItem('accessibilityMode'); 

    const accessibilityModeToggle = document.querySelector('#accessibility-mode-toggle');
    
    const enableAccessibilityMode = () => {
      // 1. Add the class to the body
      document.body.classList.add('accessibilitymode');
      // 2. Update accessibilityMode in localStorage
      localStorage.setItem('accessibilityMode', 'enabled');
    }
    
    const disableAccessibilityMode = () => {
      // 1. Remove the class from the body
      document.body.classList.remove('accessibilitymode');
      // 2. Update accessibilityMode in localStorage 
      localStorage.setItem('accessibilityMode', null);
    }
     
    // If the user already visited and enabled accessibilityMode
    // start things off with it on
    if (accessibilityMode === 'enabled') {
      enableAccessibilityMode();
    }
    
    // When someone clicks the button
    accessibilityModeToggle.addEventListener('click', () => {
    
      // get their accessibilityMode setting
      accessibilityMode = localStorage.getItem('accessibilityMode'); 
      
      // if it not current enabled, enable it
      if (accessibilityMode !== 'enabled') {
        enableAccessibilityMode();
      // if it has been enabled, turn it off  
      } else {  
        disableAccessibilityMode(); 
      }
    });

