"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link href="/">BrewViet</Link>
                </div>

                <button className={styles.mobileToggle} onClick={toggleMenu} aria-label="Toggle menu">
                    <span className={isMenuOpen ? styles.barOpen : styles.bar}></span>
                    <span className={isMenuOpen ? styles.barOpen : styles.bar}></span>
                    <span className={isMenuOpen ? styles.barOpen : styles.bar}></span>
                </button>

                <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
                    <Link href="/" className={`${styles.navLink} ${styles.navLinkActive}`} onClick={() => setIsMenuOpen(false)}>Home</Link>
                    <Link href="#about" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>About</Link>
                    <Link href="#shop" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Menu</Link>
                    <Link href="#contact" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Contact</Link>
                </nav>
                <div className={styles.actions}>
                    <button className={styles.authBtn}>Log In</button>
                    <button className={styles.cartBtn}>Cart (0)</button>
                </div>
            </div>
        </header>
    );
}
