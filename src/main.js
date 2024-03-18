let isLightTheme = true;
let body = document.getElementById("body");
let nav = document.getElementById("nav");

//locastorageba kene menteni a legutobb hasznalt modot ehhez majd megkerjuk lacit
function themeChange(){
    if (isLightTheme == true){
        isLightTheme = false;
        body.setAttribute('data-bs-theme', "dark");
        nav.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    }
    else{
        isLightTheme = true;
        body.setAttribute('data-bs-theme', "light");
        nav.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
    }
}