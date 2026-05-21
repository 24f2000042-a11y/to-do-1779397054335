document.getElementById('contactForm').addEventListener('submit',function(e){e.preventDefault();alert('Message sent!');});
// smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(function(anchor){anchor.addEventListener('click',function(e){e.preventDefault();document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});});});