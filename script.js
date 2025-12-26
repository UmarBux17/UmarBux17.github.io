document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

window.addEventListener('scroll', () => {
    document.getElementById('header').classList.toggle('scrolled', window.scrollY > 50);
});

const sections = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1 });
sections.forEach(sec => observer.observe(sec));