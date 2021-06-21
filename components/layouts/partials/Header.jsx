import Anchor from '~/components/Anchor'
import styles from '~/styles/header.module.css'
import FullLogo from '~/components/layouts/partials/FullLogo'
import Logo from '~/components/layouts/partials/Logo'
import ThemeSwitcher from '~/components/layouts/partials/ThemeSwitcher'

export default function Header() {
    return (
        <header className={`flex justify-center h-20 fixed top-0 inset-x-0 z-10 bg-white dark:bg-gray-900 border-b border-gray-700 dark:border-gray-400 border-opacity-20 dark:border-opacity-20 ${styles.header} ${styles.headerBg}`}>
            <div className="container flex p-5 items-center">
                <div className="hidden sm:flex">
                    <FullLogo />
                </div>
                <div className="sm:hidden">
                    <Logo />
                </div>
                <nav className="mr-auto ml-4 pl-4 border-l border-gray-400 flex items-center text-base">
                    <Anchor href="/information">
                        <a className="mr-5 px-2 py-1">Information</a>
                    </Anchor>
                </nav>
                <div className="flex">
                    <ThemeSwitcher />
                </div>
            </div>
        </header >
    )
}
