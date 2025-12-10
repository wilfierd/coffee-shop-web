import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.column}>
          <h3 className={styles.brand}>BrewViet</h3>
          <p className={styles.desc}>
            Kham pha ca phe Viet chinh goc.
          </p>
        </div>
        <div className={styles.column}>
          <h4>About</h4>
          <Link href="#story">Story</Link>
          <Link href="#services">Services</Link>
          <Link href="#pricing">Pricing</Link>
          <Link href="#gallery">Gallery</Link>
          <Link href="#contact">Contact Us</Link>
        </div>
        <div className={styles.column}>
          <h4>Company</h4>
          <Link href="#works">How it works</Link>
          <Link href="#careers">Careers</Link>
          <Link href="#privacy">Privacy Policy</Link>
          <Link href="#terms">Terms</Link>
          <Link href="#faq">FAQ</Link>
        </div>
        <div className={styles.column}>
          <h4>Contact Us</h4>
          <p className={styles.contactInfo}>
            123 Coffee Street, Hanoi, Vietnam
          </p>
          <p className={styles.contactInfo}>
            hello@brewviet.com
          </p>
          <p className={styles.contactInfo}>
            +84 123 456 789
          </p>
        </div>
      </div>
    </footer>
  );
}
