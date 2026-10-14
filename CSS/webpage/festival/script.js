const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const diya = document.getElementById("diya");
const lightButton = document.getElementById("light-diya");
const message = document.getElementById("diya-message");

function lightDiya() {
  diya.classList.add("lit");
  message.textContent = "May Lord Ganesha illuminate your path.";
  lightButton.innerHTML = "The Diya is Lit <span>✦</span>";
}

lightButton.addEventListener("click", lightDiya);
diya.addEventListener("click", lightDiya);
