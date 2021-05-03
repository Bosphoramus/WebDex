import Link from 'next/link'
import CustomLink from '~/components/CustomLink'
import Logo from './Logo'
import styles from '~/styles/header.module.css'

export default function Header() {
    return (
        <header className={`flex justify-center h-20 fixed top-0 inset-x-0 z-10 bg-white dark:bg-gray-900 ${styles.headerBg}`}>
            <div className="container flex p-5">
                <Link href="/">
                    <a className="flex items-center space-x-3">
                        <Logo />
                        <span className="text-xl font-medium">WebDex</span>
                    </a>
                </Link>
                <nav className="mr-auto ml-4 pl-4 border-l border-gray-400 flex items-center text-base">
                    <CustomLink href="/pokedex">
                        <a className="mr-5 px-2 py-1">Pokedex</a>
                    </CustomLink>
                </nav>
            </div>
        </header >
    )
}
