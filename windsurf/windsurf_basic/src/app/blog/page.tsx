import Link from 'next/link';
import styles from './page.module.css';

const BLOG_POSTS = [
    {
        id: 1,
        slug: 'future-of-web-development',
        title: 'The Future of Web Development',
        excerpt: 'Exploring the latest trends and technologies shaping the web.',
        date: 'Oct 15, 2023',
    },
    {
        id: 2,
        slug: 'mastering-nextjs',
        title: 'Mastering Next.js 14',
        excerpt: 'A comprehensive guide to the new App Router and Server Components.',
        date: 'Nov 02, 2023',
    },
    {
        id: 3,
        slug: 'css-modules-vs-tailwind',
        title: 'CSS Modules vs Tailwind',
        excerpt: 'Comparing two popular styling approaches for modern React apps.',
        date: 'Nov 20, 2023',
    },
];

export default function Blog() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Latest <span className={styles.highlight}>Insights</span></h1>
            </header>

            <div className={styles.grid}>
                {BLOG_POSTS.map((post) => (
                    <Link key={post.id} href={`/blog/${post.slug}`} className={styles.card}>
                        <div className={styles.cardContent}>
                            <span className={styles.cardDate}>{post.date}</span>
                            <h3 className={styles.cardTitle}>{post.title}</h3>
                            <p className={styles.cardExcerpt}>{post.excerpt}</p>
                            <span className={styles.readMore}>Read Article &rarr;</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
