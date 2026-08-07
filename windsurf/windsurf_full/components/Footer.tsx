export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full py-12 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-sm text-gray-500 text-center md:text-left">
                    &copy; {currentYear} MyPortfolio. All rights reserved.
                </div>

                <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    >
                        Twitter/X
                    </a>
                    <a
                        href="https://tiktok.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    >
                        TikTok
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </footer>
    );
}
