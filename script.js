const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  const isDark = body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  toggleBtn.textContent = isDark ? "☀️" : "🌙";
});
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");   // show/hide menu
  hamburger.classList.toggle("active");  // change icon to X
});
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const submitBtn = contactForm.querySelector("button[type='submit']");
        submitBtn.disabled = true;
        submitBtn.textContent = "Sending...";

        try {
            const response = await fetch(contactForm.action, {
                method: "POST",
                body: new FormData(contactForm),
                headers: {
                    "Accept": "application/json"
                }
            });

            if (response.ok) {
                alert("Message sent successfully. Thank you!");
                contactForm.reset();
            } else {
                alert("Message failed to send. Please try again.");
            }
        } catch (error) {
            alert("Network error. Please check your internet connection.");
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = "Submit";
        }
    });
}
