import Header from '~/components/layouts/Header'
import Footer from '~/components/layouts/Footer'

export default function MainLayout({ children }) {
    return (
        <>
            <Header />
            <main className="container mx-auto p-5">
                {children}
            </main>
            {/* <Footer /> */}
        </>
    )
}
