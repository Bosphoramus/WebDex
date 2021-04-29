import Head from 'next/head'
import Header from '~/components/layouts/partials/Header'
import Footer from '~/components/layouts/partials/Footer'

export default function MainLayout({ children }) {
    return (
        <>
        <Head>
            <title>Antonio's WebDex</title>
        </Head>
        <div className="pt-20">
            <Header />
            <main className="container mx-auto px-5">
                {children}
            </main>
            <Footer />
        </div>
        </>
    )
}
