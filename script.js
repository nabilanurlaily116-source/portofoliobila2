// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', ()=>{ navbar.classList.toggle('scrolled', window.scrollY>40); });

// Menu toggle
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', ()=>{ navLinks.classList.toggle('active'); });
navLinks.querySelectorAll('a').forEach(link=>link.addEventListener('click', ()=>{ navLinks.classList.remove('active'); }));

// Scroll reveal
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){ entry.target.classList.add('active'); }
  });
}, { threshold:0.1 });
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));