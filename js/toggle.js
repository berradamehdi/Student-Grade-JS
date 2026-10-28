const themeToggleBtn = document.querySelector(".btn-toggle")
let themeSwitch = true

const container = document.querySelector(".container")
const title = document.querySelector(".title")
const boxAverage = document.querySelector(".box-average")
const valuetitleAverge = document.querySelector(".value-title")
const value = document.querySelector(".value")
const titleInput = document.querySelector(".titleInput")
const icon = document.querySelectorAll(".icon")
const input = document.querySelectorAll(".input")
const copy = document.querySelector(".copy-right")

const toggleTheme = () => {
    if(themeSwitch){
        container.style.backgroundColor = "var(--bg-main-light)"
        themeToggleBtn.style.color = "var(--bg-main)"
        title.style.color = "var(--text-primary-light)"
        boxAverage.style.color = "var(--border-color)"
        valuetitleAverge.style.color = "var(--text-primary-light)"
        value.style.color = "var(--text-primary)"
        value.style.backgroundColor = "var(--bg-main)"
        titleInput.style.color = "var(--text-primary-light)"
        Array.from(icon).map(i => {
            i.style.backgroundColor = "var(--text-primary-light)"
            i.style.color = "var(--bg-input-light)"
        })
        Array.from(input).map(i => {
            i.style.backgroundColor = "var(--bg-input-light)"
            i.style.color = "var(--text-primary-light)"
            i.style.border = "1px solid var(--text-primary-light)"
        })
        copy.style.color = "var(--text-primary-light)"

        themeSwitch = false
    }
    else {
        container.style.backgroundColor = "var(--bg-main)"
        themeToggleBtn.style.color = "var(--bg-main-light)"
        title.style.color = "var(--text-primary)"
        boxAverage.style.color = "var(--border-color-light)"
        valuetitleAverge.style.color = "var(--text-primary)"
        value.style.color = "var(--text-primary-light)"
        value.style.backgroundColor = "var(--bg-main-light)"
        titleInput.style.color = "var(--text-primary)"
        Array.from(icon).map(i => {
            i.style.backgroundColor = "var(--text-primary)"
            i.style.color = "var(--bg-input)"
        })
        Array.from(input).map(i => {
            i.style.backgroundColor = "var(--bg-input)"
            i.style.color = "var(--text-primary)"
            i.style.border = "1px solid var(--text-primary)"
        })
        copy.style.color = "var(--text-primary)"

        themeSwitch = true
    }
} 