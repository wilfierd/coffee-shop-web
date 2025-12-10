import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link href="/">BrewViet</Link>
                </div>
                <nav className={styles.nav}>
                    <Link href="/" className={`${styles.navLink} ${styles.navLinkActive}`}>Home</Link>
                    <Link href="#about" className={styles.navLink}>About</Link>
                    <Link href="#shop" className={styles.navLink}>Menu</Link>
                    <Link href="#contact" className={styles.navLink}>Contact</Link>
                </nav>
                <div className={styles.actions}>
                    <button className={styles.authBtn}>Sign In</button>
                    <button className={styles.cartBtn}>Cart (0)</button>
                </div>
            </div>
        </header>
    );
}
