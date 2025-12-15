import Link from 'next/link';
import styles from './MorningPromo.module.css';

export default function MorningPromo() {
    return (
        <section className={styles.section}>
            <div className={styles.content}>
                <h2 className={styles.title}>Tao co hoi cho buoi sang tuyet voi cung voi BrewViet</h2>
                <p className={styles.text}>Mang den trai nghiem dam da, ca phe nguyen chat dau ngay.</p>
                <Link href="#shop" className={styles.button}>Dat hang ngay</Link>
            </div>
        </section>
    );
}
