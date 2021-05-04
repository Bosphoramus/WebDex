import Link from 'next/link'
import Logo from './Logo'

export default function FullLogo() {
    return (
        <Link href="/">
            <a className="flex items-center space-x-3">
                <Logo />
                <span className="text-xl font-medium">Web<span className="text-red-500">Dex</span></span>
            </a>
        </Link>
    )
}
