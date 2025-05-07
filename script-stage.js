// Toggle navigation menu on mobile
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Dynamic hero title
const heroTitle = document.getElementById('heroTitle');
const titles = [
  'Reliable Pet Care at Your Fingertips',
  'Your Pet’s New Best Friend',
  'Trusted Walkers in Your Neighborhood'
];
let index = 0;

setInterval(() => {
  index = (index + 1) % titles.length;
  heroTitle.textContent = titles[index];
}, 5000);

