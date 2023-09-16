// JavaScript to add a class when scrolling down
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    const input = document.querySelector('.EnterLocation');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
        input.classList.add('EnterLocation')
    } else {
        navbar.classList.remove('scrolled');
        input.classList.remove('EnterLocation')
    }
});

