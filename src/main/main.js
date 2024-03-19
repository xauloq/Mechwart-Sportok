let isLightTheme = true; 
let body = document.getElementById("body");
let nav = document.getElementById("nav");
let css = document.getElementById("cssLink");

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
        }
    }
});