import Link from 'next/link'

export default function Header() {
    return (
        <header className="flex justify-center text-gray-600 body-font fixed top-0 inset-x-0 h-20 backdrop-filter backdrop-blur bg-transparent">
            <div className="container flex p-5">
                <Link href="/">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                    <span className="text-xl">WebDex</span>
                </a>
                </Link>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                    <Link href="pokedex"><a className="mr-5 hover:text-gray-900">Pokedex</a></Link>
                </nav>
            </div>
        </header>
    )
}
