document.addEventListener("DOMContentLoaded", () => {
  // Toggle navigation menu on mobile
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
  }

  // Dynamic hero title
  const heroTitle = document.getElementById('heroTitle');
  const titles = [
    'Reliable Pet Care at Your Fingertips',
    'Your Pet’s New Best Friend',
    'Trusted Walkers in Your Neighborhood'
  ];
  let index = 0;

  if (heroTitle) {
    setInterval(() => {
      index = (index + 1) % titles.length;
      heroTitle.textContent = titles[index];
    }, 5000);
  }

  // Signup form logic
  const signupForm = document.getElementById("signupForm");

  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const userEmail = document.getElementById("email").value;

      fetch("https://wambobe-production.up.railway.app/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: userEmail }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("✅ Signup successful:", data);
          alert("Thank you for signing up!");
        })
        .catch((err) => {
          console.error("❌ Error submitting form:", err);
          alert("Something went wrong. Please try again.");
        });
    });
  }
});
