// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (header) {
        header.classList.toggle('scrolled', window.scrollY > 50);
    }
});

// Intersection Observer for fade-in animations
const sections = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(sec => observer.observe(sec));

// HERO SECTION FIX: Make hero visible immediately on page load
window.addEventListener('DOMContentLoaded', () => {
    const hero = document.getElementById('hero');
    const heroContent = document.querySelector('.hero-content');
    
    if (hero) {
        hero.classList.add('visible');
    }
    if (heroContent) {
        heroContent.classList.add('visible');
    }
});