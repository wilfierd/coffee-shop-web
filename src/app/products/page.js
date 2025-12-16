"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './products.module.css';
import Recover from '../components/home/Recover';

export default function ProductsPage() {
    const [filter, setFilter] = useState('All');

    // Mock Data based on the design
    // Reusing existing images from public/images
    const products = [
        {
            id: 1,
            name: 'Cà phê hạt Robusta',
            price: '135,000 ₫',
            image: '/images/coffee_product_bag_1_1765379430870.png',
            category: 'Robusta'
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
                    <h2 className={styles.smallTitle}>Khám phá cà phê Việt chính gốc</h2>
                    <div className={styles.mainTitleWrapper}>
                        <span className={styles.scriptText}>Coffee</span>
                    </div>
                    <p className={styles.heroDescription}>
                        Để mỗi tách cà phê trên tay không chỉ là thức uống, mà là bản tuyên ngôn về phong cách sống của riêng mình.
                    </p>
                    <button className={styles.heroBtn}>Đặt hàng ngay</button>
                </div>
            </section>

            {/* Products Grid Section */}
            <section className={styles.productsSection}>
                <h2 className={styles.sectionTitle}>Sản phẩm của chúng tôi</h2>

                {/* Filter Bar */}
                <div className={styles.filterBar}>
                    <div className={styles.filterGroup}>
                        <div className={styles.filterItem}>Tất cả</div>
                        <div className={styles.filterItem}>Espresso</div>
                        <div className={styles.filterItem}>Phin Giấy</div>
                        <div className={styles.filterItem}>Hạt Rang</div>
                    </div>
                    <div>
                        <input type="text" placeholder="Tìm kiếm..." className={styles.searchBox} />
                    </div>
                </div>

                {/* Grid */}
                <div className={styles.productGrid}>
                    {products.map(product => (
                        <div key={product.id} className={styles.productCard}>
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
                        </div>
                    ))}
                </div>
            </section>

            {/* About Section (Reusing Recover Component) */}
            <Recover
                title="Giới thiệu"
                description={
                    <>
                        Cà phê rang xay được chọn lọc từ những hạt cà phê hảo hạng nhất
                        từ vùng cao nguyên Việt Nam. Với quy trình chế biến nghiêm ngặt,
                        giữ trọn hương vị đậm đà và phong vị truyền thống.
                        <br /><br />
                        Chúng tôi tự hào mang đến những ly cà phê sạch và chất lượng
                        cho người sành điệu, đam mê khám phá hương vị cà phê Việt.
                    </>
                }
                buttonText="Xem chi tiết"
                imageSrc="/images/coffee-beans 1.png"
            />

            {/* CTA Banner */}
            <section className={styles.ctaBanner}>
                <div className={styles.ctaContent}>
                    <h2 className={styles.ctaTitle}>
                        Tạo cơ hội cho buổi sáng <br />
                        tuyệt vời cùng với <span>BrewViet</span>
                    </h2>
                    <p className={styles.ctaText}>
                        Mang lại sự tỉnh táo ngày dài, cho mọi kết nối được thăng hoa.
                    </p>
                    <button className={styles.heroBtn}>Mua ngay</button>
                </div>
                <div className={styles.ctaImageWrapper}>
                    <Image
                        src="/images/coffee-cup 1.png"
                        alt="Coffee Cup"
                        fill
                        style={{ objectFit: 'contain' }}
                    />
                </div>
            </section>
        </div>
    );
}
