// initialize default value
function getTheme(){
    return localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
}

function setTheme(style){
    document.documentElement.setAttribute('data-theme', style);
    localStorage.setItem('theme', style);  
}

// switch themes
function switchTheme(e) {
    var theme = getTheme();
    if (theme == 'light') {
        setTheme('dark');
    }
    else {
        setTheme('light');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var themeSwitcher = document.querySelector('.theme-switch');
    themeSwitcher.addEventListener('click', switchTheme, false);
    document.documentElement.classList.remove("loadHtml");
}, false);