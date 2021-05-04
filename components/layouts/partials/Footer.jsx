import Link from 'next/link'
import FullLogo from './FullLogo'
import Logo from './Logo'

export default function Footer() {
    return (
        <footer className="flex justify-center h-20">
            <div className="container flex p-5">
                <FullLogo />
                <div className="ml-4 pl-4 border-l border-gray-400 flex items-center text-base mr-auto">
                    <span className="text-sm text-gray-500">© {new Date().getFullYear()} Antonio Ramírez</span>
                </div>
                <span className="flex items-center px-1">
                    <a className="text-gray-500" href="https://twitter.com/bosphoramus">
                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                        </svg>
                    </a>
                </span>
            </div>
        </footer>
    )
}
