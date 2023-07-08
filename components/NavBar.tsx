import Link from "next/link";

export default function NavBar() {
    return (
    <nav className="flex flex-row justify-between py-4 px-6 items-baseline w-full">
        <Link href="/" className="text-2xl no-underline text-grey-darkest">rdcox</Link>
        <Link href="/resume" className="text-lg no-underline text-grey-darkest ml-2">resume</Link>
      </nav>
    )
}