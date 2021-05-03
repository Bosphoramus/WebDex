import Head from 'next/head'
import Header from '~/components/layouts/partials/Header'
import Footer from '~/components/layouts/partials/Footer'

export default function MainLayout({ children }) {
    return (
        <>
        <Head>
            <title>Tony's WebDex</title>
            <meta name="color-scheme" content="dark light"></meta>
        </Head>
        <div className="pt-20 dark:bg-black dark:text-white">
            <Header />
            <main className="container mx-auto px-5">
                {children}
            </main>
            <Footer />
        </div>
        </>
    )
}
