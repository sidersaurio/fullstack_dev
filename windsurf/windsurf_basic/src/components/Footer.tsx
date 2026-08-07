import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p>&copy; {new Date().getFullYear()} DevPortfolio. All rights reserved.</p>
                <div className={styles.socials}>
                    <a href="#" className={styles.socialLink}>GitHub</a>
                    <a href="#" className={styles.socialLink}>Twitter</a>
                    <a href="#" className={styles.socialLink}>LinkedIn</a>
                </div>
            </div>
        </footer>
    );
}
