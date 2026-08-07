import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <section className={styles.hero}>
        <h1 className={styles.title}>
          Building the <span className={styles.highlight}>Future</span> of Web
        </h1>
        <p className={styles.subtitle}>
          I'm a Full Stack Developer passionate about crafting beautiful, high-performance web experiences.
        </p>
        <div className={styles.ctaButtons}>
          <Link href="/about" className={styles.primaryButton}>
            View My Work
          </Link>
          <Link href="/blog" className={styles.secondaryButton}>
            Read My Blog
          </Link>
        </div>
      </section>
    </div>
  );
}
