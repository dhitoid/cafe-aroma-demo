const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if(window.scrollY > 50){
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){
  const windowHeight = window.innerHeight;

  reveals.forEach(el=>{
    const elementTop = el.getBoundingClientRect().top;

    if(elementTop < windowHeight - 100){
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();