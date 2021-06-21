import Head from 'next/head'
import Header from '~/components/layouts/partials/Header'
import Footer from '~/components/layouts/partials/Footer'
import { useContext } from 'react'
import { ThemeContext } from '~/contexts/themeContext'

export default function MainLayout({ children }) {
    const { theme } = useContext(ThemeContext)

    return (
        <>
            <Head>
                <title>Tony&apos;s WebDex</title>
                <meta name="color-scheme" content={`${theme === 'dark' ? 'dark' : 'light'}`}></meta>
                <meta name="theme-color" content={`${theme === 'dark' ? '#000000' : '#111827'}`}></meta>
            </Head>
                <div className="pt-20 bg-white dark:bg-gray-900 dark:text-white text-black">
                    <Header />
                    <main className="container mx-auto p-5">
                        {children}
                    </main>
                    <Footer />
                </div>
        </>
    )
}
