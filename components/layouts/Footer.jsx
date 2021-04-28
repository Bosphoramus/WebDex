import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="flex justify-center text-gray-600 body-font h-20">
            <div className="container flex p-5">
                <Link href="/">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 space-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                        <span className="text-xl">WebDex</span>
                    </a>
                </Link>
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-400 sm:py-2 sm:mt-0 mt-4">
                    © {new Date().getFullYear()} Antonio Ramírez
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <a className="ml-3 text-gray-500" href="https://twitter.com/bosphoramus">
                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                        </svg>
                    </a>
                </span>
            </div>
        </footer>
    )
}
