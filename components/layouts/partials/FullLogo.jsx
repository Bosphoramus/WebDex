import Link from 'next/link'
import Logo from './Logo'

export default function FullLogo() {
    return (
        <>
            <Logo />
            <Link href="/">
                <a className="flex items-center space-x-3">
                    <span className="text-xl font-medium ml-3">Web<span className="text-red-500">Dex</span></span>
                </a>
            </Link>
        </>
    )
}
