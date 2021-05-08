import { createContext, useEffect, useState, useContext } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(getInitialTheme)

    const rawSetTheme = theme => {
        const root = window.document.documentElement
        const isDark = theme === "dark"

        root.classList.remove(isDark ? "light" : "dark")
        root.classList.add(theme)

        localStorage.setItem("color-theme", theme)
    }

    useEffect(
        () => {
            rawSetTheme(theme)
        },
        [theme]
    )

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

const getInitialTheme = () => {
    if (typeof window !== "undefined" && window.localStorage) {
        const storedPrefs = window.localStorage.getItem("color-theme")
        if (typeof storedPrefs === "string") {
            return storedPrefs
        }

        const userMedia = window.matchMedia("(prefers-color-scheme: dark)")
        if (userMedia.matches) {
            return "dark"
        }
    }
    
    return "light"
}

