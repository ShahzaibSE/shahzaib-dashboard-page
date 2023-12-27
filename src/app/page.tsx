import Image from 'next/image'
import Dashboard from '@/components/dashboard/dashboard'

export default function Home() {
  return (
    <main className="min-h-screen">
      <header></header>
      <div>
        <Dashboard />
      </div>
    </main>
  )
}
