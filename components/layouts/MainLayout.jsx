import Header from '~/components/layouts/Header'
import Footer from '~/components/layouts/Footer'

export default function MainLayout({ children }) {
    return (
        <div className="pt-20">
            <Header />
            <main className="container mx-auto px-5">
                {children}
            </main>
            {/* <Footer /> */}
        </div>
    )
}
