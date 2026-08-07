import Link from 'next/link';
import styles from './page.module.css';

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    // Mock data - in a real app, fetch based on slug
    const post = {
        title: slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
        date: 'October 15, 2023',
        content: (
            <>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <h2>The Core Concepts</h2>
                <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
                <h2>Conclusion</h2>
                <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
                    qui ratione voluptatem sequi nesciunt.
                </p>
            </>
        )
    };

    return (
        <div className={styles.container}>
            <Link href="/blog" className={styles.backLink}>
                &larr; Back to Blog
            </Link>

            <article className={styles.article}>
                <header className={styles.header}>
                    <h1 className={styles.title}>{post.title}</h1>
                    <time className={styles.date}>{post.date}</time>
                </header>

                <div className={styles.content}>
                    {post.content}
                </div>
            </article>
        </div>
    );
}
