import MainLayout from '~/components/layouts/MainLayout'

export default function Home() {
  return (
    <div className="flex justify-center items-center h-80">
      <p className="font-bold text-6xl">WebDex</p>
    </div>
  )
}

Home.Layout = MainLayout