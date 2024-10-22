var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var sbmtError = document.getElementById('form-error');

var typeData = new Typed(".role", {
    strings: [
        "Programmer",
        "Frontend",
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
});

const userimg = document.querySelector("#submit-btn");
function random(number){
    return Math.floor(Math.random()*(number + 1));
}
function changebg(){
    const randomColor = `rgb(${random(255)},${random(255)},${random(255)})`;
    userimg.style.backgroundColor = randomColor;
}
userimg.addEventListener("mouseover", changebg);




function validateName() {
    var name = document.getElementById('contact-name').value;
    if (name.length == 0)
    {
        nameError.innerHTML = "Name is required";
        return false;
    }
    if (name.length < 3) {
        nameError.innerHTML = "Minimum 3 character is required";
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = "Write full name";
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateEmail() {
    var email = document.getElementById('contact-email').value;
    if (email.length == 0) {
        emailError.innerHTML = "Email is  required";
        return false;
    }

    if (!email.match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([com]{3})$/)) {
        emailError.innerHTML = "Invalid Email";
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}


function validateForm() {
    if (!validateName() || !validateEmail() ) {
        sbmtError.style.display = 'block';
        sbmtError.innerHTML = 'Please fix error to submit';
        setTimeout(function () { sbmtError.style.display = 'none'; }, 3000);
        return false;
    }
}



// Select the button
const btn = document.querySelector('.btn-toggle');

// Listen for a click on the button
btn.addEventListener('click', function() {
  // Then toggle (add/remove) the .dark-theme class to the body
  document.body.classList.toggle('dark-theme');  
})

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

 function menuOnClick() {
   document.getElementById("menu-bar").classList.toggle("change");
   document.getElementById("nav").classList.toggle("change");
   document.getElementById("menu-bg").classList.toggle("change-bg");
 }


 document.addEventListener("DOMContentLoaded", function () {
   // Select the skill logos and the section
   const skillSection = document.querySelector("#skills");
   const skillLogos = document.querySelectorAll(".skills-logo");

   // Create the intersection observer
   const observer = new IntersectionObserver(
     (entries, observer) => {
       entries.forEach((entry) => {
         if (entry.isIntersecting) {
           // Start animation for each logo with a staggered delay
           skillLogos.forEach((logo, index) => {
             setTimeout(() => {
               logo.style.opacity = "1";
               logo.style.transform = "translateY(0)";
             }, index * 200); // 200ms delay between each logo
           });

           // Unobserve the section once animation is triggered
          //  observer.unobserve(skillSection);
         }
       });
     },
     { threshold: 0.2 }
   ); // Trigger when 20% of the section is visible

   // Observe the skill section
   observer.observe(skillSection);
 });