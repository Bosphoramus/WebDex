import { useContext } from 'react'
import styles from '~/styles/loadingSpinner.module.css'
import { ThemeContext } from '~/contexts/themeContext'

export default function LoadingSpinner() {
	const { theme } = useContext(ThemeContext)
	
    return (
        <svg className={`rotating h-36 w-36 ${styles.rotating}`} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100">
            <path d="M 30 50
		a 1 1 1 0 1 40 0
		h-12.5
		a 1 1 1 0 0 -15 0
		z" fill="#f00" stroke={`${theme === "light" ? "#222" : "white"}`} />
            <circle cx={50} cy={50} r={5} fill={`${theme === "light" ? "#222" : "white"}`} stroke={`${theme === "light" ? "white" : "#222"}`} />
            <path d="M 30 50
		a 1 1 1 0 0 40 0
		h-12.5
		a 1 1 1 0 1 -15 0
		z" fill="#fff" stroke={`${theme === "light" ? "#222" : "white"}`} />
        </svg>
    )
}
