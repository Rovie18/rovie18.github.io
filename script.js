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
// Your existing theme toggle and hamburger code remains unchanged...

// Contact form AJAX submission (no redirect)
const contactForm = document.getElementById('contactform');  // Note: your form ID is lowercase 'contactform'

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();  // ← This prevents the default form submission (and redirect!)

        const submitBtn = contactForm.querySelector('button[type="submit"]');
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
        }

        const formspreeEndpoint = 'https://formspree.io/f/mjgvpdvw';

        const formData = new FormData(contactForm);

        try {
            const res = await fetch(formspreeEndpoint, {
                method: 'POST',
                headers: { 'Accept': 'application/json' },
                body: formData
            });

            if (res.ok) {
                // Success: show feedback without leaving the page
                alert('Thank you! Your message has been sent.');
                contactForm.reset();  // Clear the form
            } else {
                alert('Submission failed. Please try again.');
            }
        } catch (err) {
            alert('Network error. Please check your connection and try again.');
        } finally {
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Message';
            }
        }
    });
}