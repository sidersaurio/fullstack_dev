import styles from './page.module.css';

export default function About() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>About <span className={styles.highlight}>Me</span></h1>
            </header>

            <section className={styles.section}>
                <p className={styles.bio}>
                    I am a passionate developer with a keen eye for design and a drive for creating seamless digital experiences.
                    With expertise in modern web technologies, I transform complex problems into elegant solutions.
                </p>
            </section>

            <section className={styles.section}>
                <h2>Skills</h2>
                <div className={styles.skillsGrid}>
                    {['React', 'Next.js', 'TypeScript', 'Node.js', 'CSS/Sass', 'PostgreSQL'].map((skill) => (
                        <div key={skill} className={styles.skillCard}>
                            <p className={styles.skillName}>{skill}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.section}>
                <h2>Experience</h2>
                <div className={styles.timeline}>
                    <div className={styles.timelineItem}>
                        <span className={styles.timelineDate}>2023 - Present</span>
                        <h3 className={styles.timelineTitle}>Senior Frontend Developer</h3>
                        <p className={styles.timelineDesc}>Leading frontend architecture and mentoring junior developers.</p>
                    </div>
                    <div className={styles.timelineItem}>
                        <span className={styles.timelineDate}>2021 - 2023</span>
                        <h3 className={styles.timelineTitle}>Full Stack Developer</h3>
                        <p className={styles.timelineDesc}>Built scalable web applications using React and Node.js.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
