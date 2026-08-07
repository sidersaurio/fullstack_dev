import Link from "next/link";

export default function Header() {
    return (
        <header className="w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link
                    href="/"
                    className="text-xl font-bold font-sans tracking-tight hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                    MyPortfolio
                </Link>

                <nav>
                    <ul className="flex gap-6 text-sm font-medium">
                        <li>
                            <Link
                                href="/"
                                className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/blog"
                                className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                            >
                                Blog
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
