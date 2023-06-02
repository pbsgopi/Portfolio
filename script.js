var body = document.querySelector('body');
var toggleThemeBtn = document.querySelector('.toggle-theme');
var darkTheme = 'dark-theme';
var lightTheme = 'light-theme';
var setThemeInLocalStorage = function (theme) {
    localStorage.setItem('THEME', JSON.stringify(theme));
};
var getThemeFromLocalStorage = function () {
    var themeFromStorage = localStorage.getItem('THEME');
    return !themeFromStorage ?
        themeFromStorage :
        JSON.parse(themeFromStorage);
};
var currentTheme = getThemeFromLocalStorage();
if (currentTheme !== null) {
    if (body !== null) {
        body.classList.add(currentTheme);
    }
}
;
var toggleTheme = function () {
    var currentTheme = getThemeFromLocalStorage();
    if (currentTheme === darkTheme) {
        setThemeInLocalStorage(lightTheme);
        if (body !== null) {
            body.classList.replace(darkTheme, lightTheme);
        }
    }
    else {
        setThemeInLocalStorage(darkTheme);
        if (body !== null) {
            body.classList.replace(lightTheme, darkTheme);
        }
    }
};
if (toggleThemeBtn !== null) {
    toggleThemeBtn.addEventListener('click', toggleTheme);
}
;