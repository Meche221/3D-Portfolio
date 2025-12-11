// GSAP plugins are already loaded via CDN in the HTML file
const gsap = window.gsap // Declare gsap variable
const ScrollTrigger = window.ScrollTrigger // Declare ScrollTrigger variable

// Theme Management
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Check for saved theme preference or default to "dark"
const currentTheme = localStorage.getItem("theme") || "dark";
body.setAttribute("data-theme", currentTheme);

themeToggle.addEventListener("click", () => {
  const currentTheme = body.getAttribute("data-theme")
  const newTheme = currentTheme === "dark" ? "light" : "dark"

  body.setAttribute("data-theme", newTheme)
  localStorage.setItem("theme", newTheme)

  // Animate theme toggle
  gsap.to(themeToggle,{
    scale:0.9,
    duration: 0.3,
    yoyo: true,
    repeat: 1,
    ease: "power2.inOut",
  })
})