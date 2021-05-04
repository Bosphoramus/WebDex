import CustomLink from '~/components/CustomLink'
import styles from '~/styles/header.module.css'
import FullLogo from './FullLogo'

export default function Header() {
    return (
        <header className={`flex justify-center h-20 fixed top-0 inset-x-0 z-10 bg-white dark:bg-black ${styles.headerBg}`}>
            <div className="container flex p-5">
                <FullLogo />
                <nav className="mr-auto ml-4 pl-4 border-l border-gray-400 flex items-center text-base">
                    <CustomLink href="/pokedex">
                        <a className="mr-5 px-2 py-1">Pokedex</a>
                    </CustomLink>
                </nav>
            </div>
        </header >
    )
}
