// icons

const sunIcon = document.querySelector('.sun')
const moonIcon = document.querySelector('.moon')

// surrounding divs

// const sunDiv = document.querySelector('.sunDiv')
// const moonDiv = document.querySelector('.moonDiv')

// Theme Vars

const userTheme = localStorage.getItem('theme')
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches

// Icon Toggling

const iconToggle = () => {
    sunIcon.classList.toggle('display-none');
    moonIcon.classList.toggle('display-none');
    // sunDiv.classList.toggle('display-none')
    // moonDiv.classList.toggle('display-none')
}

// Initial Theme Check
const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
        document.documentElement.classList.add("dark")
        moonIcon.classList.add("display-none")
        // moonDiv.classList.add("display-none")
        return
    }
    sunIcon.classList.add("display-none")
    // sunDiv.classList.add("display-none")
}



// Manual Theme Switching
const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark")
        localStorage.setItem('theme', 'light')
        iconToggle()
        return
    }
    document.documentElement.classList.add("dark")
    localStorage.setItem('theme', 'dark')
    iconToggle()
}

// call theme switch on click
// TODO: group the icons with a queryselectorall and loop through them using a forEach loop 
sunIcon.addEventListener('click', () => {
    themeSwitch()
})
moonIcon.addEventListener('click', () => {
    themeSwitch()
})


// invoke theme check on initial page load
themeCheck()
