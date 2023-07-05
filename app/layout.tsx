import NavBar from '@/components/NavBar'
import './globals.css'

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
      <nav className="font-mono flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
  <div className="mb-2 sm:mb-0">
    <a href="/" className="text-2xl no-underline text-grey-darkest hover:text-blue-dark">rdcox</a>
  </div>
  <div>
    <a href="/resume" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">resume</a>
  </div>
</nav>        <main className="min-h-screen bg-neutral-900 flex flex-col items-center">
          {children}
        </main>
      </body>
    </html>
  )
}
