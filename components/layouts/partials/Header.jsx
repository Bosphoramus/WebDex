import Anchor from '~/components/Anchor'
import styles from '~/styles/header.module.css'
import FullLogo from './FullLogo'
import ThemeSwitcher from './ThemeSwitcher'

export default function Header() {
    return (
        <header className={`flex justify-center h-20 fixed top-0 inset-x-0 z-10 bg-white dark:bg-black ${styles.headerBg}`}>
            <div className="container flex p-5">
                <FullLogo />
                <nav className="mr-auto ml-4 pl-4 border-l border-gray-400 flex items-center text-base">
                    <Anchor href="/information">
                        <a className="mr-5 px-2 py-1">Information</a>
                    </Anchor>
                </nav>
                <div className="my-auto">
                <ThemeSwitcher />
                </div>
            </div>
        </header >
    )
}
