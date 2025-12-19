"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './products.module.css';
import Recover from '../components/home/Recover';

export default function ProductsPage() {
    const [filter, setFilter] = useState('All');
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    // Mock Data based on the design
    // Reusing existing images from public/images
    const products = [
        {
            id: 1,
            name: '[Rang đậm] Cà phê Arabica núi Min Trà Lọt',
            price: '135,000 ₫ - 320,000 ₫',
            image: '/images/coffee_product_bag_1_1765379430870.png',
            category: 'Arabica'
        },
        {
            id: 2,
            name: 'Cà phê hạt Arabica',
            price: '155,000 ₫',
            image: '/images/coffee_product_bag_2_1765379460201.png',
            category: 'Arabica'
        },
        {
            id: 3,
            name: 'Cà phê Phin Giấy',
            price: '155,000 ₫ - 300,000 ₫',
            image: '/images/coffee_product_bag_3_1765379485481.png',
            category: 'Phin Giấy'
        },
        {
            id: 4,
            name: 'Cà phê Rang Xay',
            price: '160,000 ₫ - 250,000 ₫',
            image: '/images/brewviet_product_beans_1765380508530.png',
            category: 'Rang Xay'
        },
        {
            id: 5,
            name: 'Cà phê Phin X',
            price: '110,000 ₫ - 190,000 ₫',
            image: '/images/brewviet_product_phin_1765380470675.png',
            category: 'Phin X'
        },
        {
            id: 6,
            name: 'Cà phê Túi Lọc',
            price: '90,000 ₫',
            image: '/images/coffee_product_bag_1_1765379430870.png',
            category: 'Túi Lọc'
        },
        {
            id: 7,
            name: 'Cascara Coffee Cherry',
            price: '95,000 ₫',
            image: '/images/coffee_product_bag_2_1765379460201.png',
            category: 'Cascara'
        },
        {
            id: 8,
            name: 'Cà phê Đặc Biệt',
            price: '75,000 ₫ - 145,000 ₫',
            image: '/images/coffee_product_bag_3_1765379485481.png',
            category: 'Special'
        },
        {
            id: 9,
            name: 'Combo Quà Tặng',
            price: '90,000 ₫',
            image: '/images/brewviet_product_beans_1765380508530.png',
            category: 'Gift'
        }
    ];

    return (
        <div className={styles.container}>
            {/* Hero Section */}
            <section className={styles.heroSection}>
                <div className={styles.heroOverlay}></div>
                <Image
                    src="/images/products_hero_bg.png"
                    alt="Sunset Coffee Field"
                    fill
                    className={styles.heroBackground}
                    priority
                />
                <div className={styles.heroContent}>
                    <h2 className={styles.smallTitle}>Dụng Cụ Pha Chế Chuyên Nghiệp</h2>
                    <div className={styles.mainTitleWrapper}>
                        <span className={styles.scriptText}>Barista</span>
                    </div>
                    <p className={styles.heroDescription}>
                        Khám phá bộ sưu tập dụng cụ pha chế thủ công đỉnh cao, giúp bạn tự tay tạo nên những tách cà phê hoàn hảo tại nhà.
                    </p>
                    <button className={styles.heroBtn}>Đặt hàng ngay</button>
                </div>
            </section>

            {/* Products Grid Section */}
            <section className={styles.productsSection}>
                <h2 className={styles.sectionTitle}>Sản phẩm của chúng tôi</h2>

                {/* Filter Bar */}
                {/* Top Controls: Search & Filter */}
                <div className={styles.topControls}>
                    <div className={styles.searchWrapper}>
                        <svg className={styles.searchIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                        <input type="text" placeholder="Tìm kiếm" className={styles.searchInput} />
                    </div>

                    <div className={styles.filterWrapper}>
                        <button className={styles.filterBtn} onClick={() => setIsFilterOpen(!isFilterOpen)}>
                            <svg className={styles.filterIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                            </svg>
                            <span>Lọc</span>
                            <svg className={styles.chevronIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </button>

                        {isFilterOpen && (
                            <div className={styles.filterDropdown}>
                                <div className={styles.filterOption}>Tất cả</div>
                                <div className={styles.filterOption}>Thủ công</div>
                                <div className={styles.filterOption}>Hiện đại</div>
                                <div className={styles.filterOption}>Ngâm</div>
                                <div className={styles.filterOption}>Di động</div>
                                <div className={styles.filterOption}>Nâng cao</div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Category Tabs */}
                <div className={styles.categoryTabs}>
                    <div className={`${styles.categoryTab} ${styles.activeTab}`}>
                        Cà phê
                    </div>
                    <div className={styles.categoryTab}>Espresso</div>
                    <div className={styles.categoryTab}>Cối xay tay</div>
                    <div className={styles.categoryTab}>Máy pha</div>
                    <div className={styles.categoryTab}>Aeropress</div>
                    <div className={styles.categoryTab}>Bình đựng</div>
                    <div className={styles.categoryTab}>Minipresso</div>
                    <div className={styles.categoryTab}>Pour Over</div>
                    <div className={styles.categoryTab}>French Press</div>
                </div>

                {/* Grid */}
                <div className={styles.productGrid}>
                    {products.map(product => (
                        <div key={product.id} className={styles.productCard}>
                            <Link href={`/products/${product.id}`} className={styles.productLinkWrapper} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div className={styles.productImageWrapper}>
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        width={200}
                                        height={200}
                                        className={styles.productImage}
                                    />
                                </div>
                                <div className={styles.productInfo}>
                                    <p className={styles.productCategory}>{product.category}</p>
                                    <h3 className={styles.productName}>{product.name}</h3>
                                    <span className={styles.productPrice}>{product.price}</span>
                                    <button className={styles.addToCartBtn}>Mua ngay</button>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* About Section (Reusing Recover Component) */}
            <Recover
                title="Không Chỉ Là Dụng Cụ"
                description={
                    <>
                        Tại BrewViet, chúng tôi cung cấp giải pháp trọn gói cho trải nghiệm cà phê tại nhà.
                        Từ những bộ Kit pha chế chuyên nghiệp, kiến thức chuyên sâu, đến cộng đồng chia sẻ đam mê.
                        <br /><br />
                        Chúng tôi đồng hành cùng bạn trên hành trình trở thành một Home Barista thực thụ,
                        biến mỗi lần pha chế thành một trải nghiệm phong cách sống.
                    </>
                }
                buttonText="Tham gia cộng đồng"
                imageSrc="/images/Rectangle 7.png"
            />


        </div>
    );
}
