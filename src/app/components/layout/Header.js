"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

import { useCart } from '../../context/CartContext';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    const { cartItems } = useCart();

    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link href="/" className={styles.logoLink}>
                        <Image
                            src="/images/logo.png"
                            alt="BrewViet"
                            width={50}
                            height={50}
                            className={styles.logoImage}
                        />
                        <span className={styles.logoText}>BrewViet</span>
                    </Link>
                </div>

                <button className={styles.mobileToggle} onClick={toggleMenu} aria-label="Toggle menu">
                    <span className={isMenuOpen ? styles.barOpen : styles.bar}></span>
                    <span className={isMenuOpen ? styles.barOpen : styles.bar}></span>
                    <span className={isMenuOpen ? styles.barOpen : styles.bar}></span>
                </button>

                <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
                    <Link href="/" className={`${styles.navLink} ${pathname === '/' ? styles.navLinkActive : ''}`} onClick={() => setIsMenuOpen(false)}>Trang chủ</Link>
                    <Link href="/products" className={`${styles.navLink} ${pathname === '/products' ? styles.navLinkActive : ''}`} onClick={() => setIsMenuOpen(false)}>Sản phẩm</Link>
                    <Link href="/cart" className={`${styles.navLink} ${pathname === '/cart' ? styles.navLinkActive : ''}`} onClick={() => setIsMenuOpen(false)}>
                        Giỏ hàng
                        {totalItems > 0 && (
                            <span className={styles.cartBadge}>{totalItems}</span>
                        )}
                    </Link>
                    <Link href="/checkout" className={`${styles.navLink} ${pathname === '/checkout' ? styles.navLinkActive : ''}`} onClick={() => setIsMenuOpen(false)}>Thanh toán</Link>
                </nav>
                <div className={styles.actions}>
                    <button className={styles.authBtn}>Đăng ký</button>
                    <button className={styles.loginBtn}>Đăng nhập</button>
                </div>
            </div>
        </header>
    );
}
