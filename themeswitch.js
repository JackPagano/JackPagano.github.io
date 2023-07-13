window.addEventListener('DOMContentLoaded', (event) => {
    const switchTheme = document.querySelector('#checkbox');
    const body = document.body;

    function setTheme(themeName) {
        localStorage.setItem('theme', themeName);
        var profile = document.querySelector("#profile");
        var scrollButton = document.getElementById('scrollButton')
        body.className = themeName;
        profile.className = themeName;
        scrollButton.className = themeName;
        scrollButton.classList.add('scrollBtn');
    }

    function toggleTheme() {
        if (localStorage.getItem('theme') === 'dark-theme') {
            setTheme('light-theme');
        } else {
            setTheme('dark-theme');
        }
    }

    // Immediately invoked function to set the theme on initial load
    (function () {
        if (localStorage.getItem('theme') === 'dark-theme') {
            setTheme('dark-theme');
            document.getElementById('checkbox').checked = true;
        } else {
            setTheme('light-theme');
            document.getElementById('checkbox').checked = false;
        }
    })();

    switchTheme.addEventListener('change', toggleTheme);
});
