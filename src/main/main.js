let isLightTheme = true;
let body = document.getElementById("body");
let nav = document.getElementById("nav");
let css = document.getElementById("cssLink");

//locastorageba kene menteni a legutobb hasznalt modot ehhez majd megkerjuk lacit
function themeChange(){
    if (isLightTheme == true){
        isLightTheme = false;
        body.setAttribute('data-bs-theme', "dark");
        css.setAttribute('href',"main_dark.css");
    }
    else{
        isLightTheme = true;
        body.setAttribute('data-bs-theme', "light");
        css.setAttribute('href',"main_light.css");
    }
}