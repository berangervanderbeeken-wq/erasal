const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navbar');
const images = document.querySelectorAll('.animation-reveal');
const header = document.querySelector('header');
const heading = document.querySelector('.hero-heading span');
const card = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });

},
{
    threshold: 0
});

images.forEach(img => observer.observe(img)); 

const headerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            header.classList.add('disabled');
        }
        else {
            header.classList.remove('disabled');
        }
    });
},
{
    rootMargin: `-${header.offsetHeight}px 0px 0px 0px`,
    threshold: 0
});

headerObserver.observe(heading);

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
});

card.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('is-flipped');
    });
});

