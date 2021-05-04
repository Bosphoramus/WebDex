import MainLayout from '~/components/layouts/MainLayout'
import ProjectPresentation from '~/components/layouts/partials/ProjectPresentation'

export default function Home() {
  return (
    <div className="flex justify-center items-center space-y-2">
      <ProjectPresentation />
    </div>
  )
}

Home.Layout = MainLayout
