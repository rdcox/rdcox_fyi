import NavBar from '@/components/NavBar'
import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'rdcox.fyi',
  description: 'Personal website of Ryan Cox',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NavBar></NavBar>       
        <main className="min-h-screen bg-neutral-900 flex flex-col items-center">
          {children}
        </main>
      </body>
    </html>
  )
}
