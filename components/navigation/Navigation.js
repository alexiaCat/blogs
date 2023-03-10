import Link from 'next/link'

const Navigation = () => {
    return (
        <nav>
            <ul className="flex justify-around px-4 py-2 bg-green-200">
                <li className="px-4 py-2 font-bold text-white bg-black rounded-full hover:bg-blue-700">
                    <Link href="/"> Home </Link>
                </li>
                <li className="px-4 py-2 font-bold text-white bg-black rounded-full hover:bg-blue-700">
                    <Link href="/add-blog">Add-blog</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;
