import MainLayout from '~/components/layouts/MainLayout'
import ProjectInfo from '~/components/layouts/partials/ProjectInfo'

export default function Home() {
    return (
        <div className="flex justify-center items-center space-y-2">
            <ProjectInfo />
        </div>
    )
}

Home.Layout = MainLayout
