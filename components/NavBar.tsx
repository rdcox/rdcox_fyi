export default function NavBar() {
    return (
    <nav className="font-mono flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 shadow sm:items-baseline w-full">
        <div className="mb-2 sm:mb-0">
            <a href="/" className="text-2xl no-underline text-grey-darkest hover:text-blue-dark">rdcox</a>
        </div>
        <div>
            <a href="/resume" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">resume</a>
        </div>
    </nav>
    )
}