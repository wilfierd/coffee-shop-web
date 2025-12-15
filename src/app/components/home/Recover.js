import Image from 'next/image';
import Link from 'next/link';
import styles from './Recover.module.css';

export default function Recover() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>Discover the best coffee</h2>
                    <p className={styles.text}>
                        Bean Tour ac curae, stup import an isi qui is velit, half
                        toto bose your perfu ment and help hold mor mor. Arigato mi
                        a cala is you, soluta an yor of in a plaza space.
                    </p>
                    <Link href="#shop" className={styles.button}>Buy Now</Link>
                </div>
                <div className={styles.imageWrapper}>
                    <Image
                        src="/images/brewviet_spill_beans_1765380412141.png"
                        alt="Coffee beans spilling"
                        width={600}
                        height={400}
                        className={styles.image}
                    />
                </div>
            </div>
        </section>
    );
}
