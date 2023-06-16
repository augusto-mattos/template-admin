import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`h-screen bg-gradient-to-r from-green-500 to-blue-500`}>
       <h1>Admin</h1> 
    </div>
  )
}
