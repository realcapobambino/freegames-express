//////////////////////////////////////////////////////////////////
//                                                              //
//   Simple Dark Mode Switcher implementation by yours truly    //
//                                                              //
//////////////////////////////////////////////////////////////////

// icons
const lightSwitch = document.querySelector('.light-switch')

// Theme Vars
const userTheme = localStorage.getItem('theme')
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches

// Initial Theme Check
const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
        document.documentElement.classList.add("dark")

        return
    }
}
// Manual Theme Switching
const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark")
        localStorage.setItem('theme', 'light')
        return
    }
    document.documentElement.classList.add("dark")
    localStorage.setItem('theme', 'dark')
}

// call theme switch on click
lightSwitch.addEventListener('click', () => {
    themeSwitch()
})
// invoke theme check on initial page load
themeCheck()
