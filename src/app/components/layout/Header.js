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
                    <Link href="/" className={`${styles.navLink} ${styles.navLinkActive}`} onClick={() => setIsMenuOpen(false)}>Trang chủ</Link>
                    <Link href="#products" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Sản phẩm</Link>
                    <Link href="#cart" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Giỏ hàng</Link>
                    <Link href="#checkout" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Thanh toán</Link>
                </nav>
                <div className={styles.actions}>
                    <button className={styles.authBtn}>Đăng ký</button>
                    <button className={styles.loginBtn}>Đăng nhập</button>
                </div>
            </div>
        </header>
    );
}
