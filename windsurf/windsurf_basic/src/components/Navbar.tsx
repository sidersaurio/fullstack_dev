import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    DevPortfolio
                </Link>
                <ul className={styles.navLinks}>
                    <li>
                        <Link href="/" className={styles.navLink}>Home</Link>
                    </li>
                    <li>
                        <Link href="/about" className={styles.navLink}>About</Link>
                    </li>
                    <li>
                        <Link href="/blog" className={styles.navLink}>Blog</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
