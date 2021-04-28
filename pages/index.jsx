import MainLayout from '~/components/layouts/MainLayout'

export default function Home() {
  return (
    <div className="flex justify-center items-center h-96 bg-gray-900 rounded-lg">
      <span className="font-extrabold text-6xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-red-500">WebDex</span>
    </div>
  )
}

Home.Layout = MainLayout