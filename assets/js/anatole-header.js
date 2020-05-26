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
	document.documentElement.classList.remove("loadHtml");
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
}, false);