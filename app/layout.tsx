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
        <nav className="font-mono flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 shadow sm:items-baseline w-full">
          <div className="mb-2 sm:mb-0">
            <Link href="/" className="text-2xl no-underline text-grey-darkest hover:text-blue-dark">rdcox</Link>
          </div>
          <div>
          <Link href="/resume" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">resume</Link>
          </div>
        </nav>        
        <main className="min-h-screen bg-neutral-900 flex flex-col items-center">
          {children}
        </main>
      </body>
    </html>
  )
}
