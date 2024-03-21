let isLightTheme = true; 
let body = document.getElementById("body");
let nav = document.getElementById("nav");
let css = document.getElementById("cssLink");
let toggleSwitch = document.getElementById("mySwitch");

function themeChange() {
    if (isLightTheme) {
        isLightTheme = false;
        body.setAttribute('data-bs-theme', "dark");
        css.setAttribute('href', "main_dark.css");
    } else {
        isLightTheme = true;
        body.setAttribute('data-bs-theme', "light");
        css.setAttribute('href', "main_light.css");
    }
    localStorage.setItem('theme', isLightTheme ? 'light' : 'dark');
}

function pageChange(url){
    window.location.href = url;
}

//localstorage for theme change
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        isLightTheme = savedTheme === 'light';
        if (isLightTheme) {
            body.setAttribute('data-bs-theme', "light");
            css.setAttribute('href', "main_light.css");
        } else {
            body.setAttribute('data-bs-theme', "dark");
            css.setAttribute('href', "main_dark.css");
            toggleSwitch.checked = true;
            
        }
    }
});

// Navbar hyperlink fix
let links = ['bevezetes', 'kezilabda', 'labdarugas', 'roplabda'].map((id) => document.querySelector(`a[href="#${id}"]`))
let navbarHeight = 120;

links.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        let targetElement = document.querySelector(e.target.getAttribute('href'));

        window.scrollTo({
            top: targetElement.offsetTop - navbarHeight,
            behavior: 'smooth'
        });
    });
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
        $('.back-to-top').fadeIn(200);
    } else {
        $('.back-to-top').fadeOut(200);
    }
});

$('.back-to-top').click(function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, 300);
})