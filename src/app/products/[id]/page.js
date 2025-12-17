"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../products.module.css'; // Import from parent directory

export default function ProductDetailPage({ params }) {
    // Unwrap params using React.use()
    const { id } = React.use(params);

    // State for Filter (Reused UI)
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    // State for Product Detail
    const [quantity, setQuantity] = useState(1);
    const [selectedWeight, setSelectedWeight] = useState('250g');
    const [selectedGrind, setSelectedGrind] = useState('Pha Phin');
    const [activeImage, setActiveImage] = useState(0);

    // Mock Data for this specific product (Dark Roast / Rang đậm)
    const product = {
        id: id,
        name: '[Rang đậm] Cà phê Arabica núi Min Trà Lọt, phù hợp với - Espresso, Phin, Moka pot, Staresso',
        price: '135,000 ₫ - 520,000 ₫',
        rating: 5,
        ratingCount: 16, // derived from mocks
        images: [
            '/images/coffee_product_bag_1_1765379430870.png', // Main image
            '/images/brewviet_product_beans_1765380508530.png', // Mock thumb 1
            '/images/coffee_product_bag_3_1765379485481.png' // Mock thumb 2
        ],
        description: `
            Giống Arabica Catimor được hái chín 100% từ nông trại Cầu Đất Farm ở độ cao 1600-1650m...
            Cà phê rang mộc nguyên chất 100%...
        `,
        specs: {
            "Giống": "Catimor",
            "Vùng": "Núi Min, Lâm Đồng",
            "Phương pháp sơ chế": "Rửa (Washed)",
            "Vị": "Caramel, socola đen, thể chất dày, ít chua, hậu vị tốt",
            "Phù hợp với": "Phin, Moka pot, Staresso, Espresso"
        }
    };

    // Related Products Mock
    const relatedProducts = [
        {
            id: 1,
            name: 'Cà phê Đặc Biệt LÂM HÀ',
            price: '110,000 ₫ - 250,000 ₫',
            image: '/images/coffee_product_bag_1_1765379430870.png',
            category: 'Lâm Hà'
        },
        {
            id: 2,
            name: 'Cà phê Arabica Cầu Đất',
            price: '155,000 ₫ - 300,000 ₫',
            image: '/images/coffee_product_bag_2_1765379460201.png',
            category: 'Cầu Đất'
        },
        {
            id: 3,
            name: 'Cà phê Phin Giấy',
            price: '155,000 ₫',
            image: '/images/coffee_product_bag_3_1765379485481.png',
            category: 'Phin Giấy'
        }
    ];

    const reviews = [
        {
            id: 1,
            name: 'yennhi',
            rating: 5,
            date: '1/3/2024',
            content: 'Sản phẩm rất tốt, giao hàng nhanh, đóng gói kĩ !!',
            images: ['/images/coffee_product_bag_1_1765379430870.png']
        },
        {
            id: 2,
            name: 'minhthu',
            rating: 5,
            date: '2/5/2024',
            content: 'Giao hàng cực nhanh, chất lượng tốt. Sẽ ủng hộ shop dài dài.',
            images: ['/images/coffee_product_bag_1_1765379430870.png']
        }
    ];

    return (
        <div className={styles.container}>
            {/* ============================================================
               HERO SECTION (Reused)
               ============================================================ */}
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

            {/* ============================================================
               SEARCH & FILTER BAR (Reused Layout)
               ============================================================ */}
            <section className={styles.productsSection} style={{ paddingBottom: 0 }}>
                <h2 className={styles.sectionTitle}>Sản phẩm của chúng tôi</h2>
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
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* ============================================================
               PRODUCT DETAIL SECTION
               ============================================================ */}
            <div className={styles.detailContainer}>
                {/* Left: Images & Promo */}
                <div className={styles.detailImageSection}>
                    <div className={styles.mainImageWrapper}>
                        <Image
                            src={product.images[activeImage]}
                            alt={product.name}
                            fill
                            className={styles.detailMainImage}
                        />
                    </div>
                    <div className={styles.thumbnailList}>
                        {product.images.map((img, idx) => (
                            <div
                                key={idx}
                                className={`${styles.thumbnail} ${activeImage === idx ? styles.activeThumb : ''}`}
                                onClick={() => setActiveImage(idx)}
                            >
                                <Image
                                    src={img}
                                    alt={`Thumb ${idx}`}
                                    width={60}
                                    height={60}
                                    className={styles.thumbImage}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Promo Section Moved Here */}
                    <div className={styles.specialOfferSection}>
                        <h4 className={styles.offerTitle}>Ưu đãi đặc biệt</h4>
                        <ul className={styles.offerList}>
                            <li><strong>Mua đơn 1kg cà phê – tặng ngay 100g</strong></li>
                            <li>Cà phê Arabica núi Min, Đà Lạt, Lâm Đồng</li>
                            <li>Mức rang Đậm (Dark)</li>
                            <li>Nhặt tay bỏ hạt lỗi cẩn thận trước khi rang</li>
                            <li>100% cà phê rang mộc</li>
                            <li>Cam kết cà phê rang trong vòng 10 ngày từ ngày bán, đóng trong túi Zip, giữ nguyên vẹn hương thơm và mùi vị nguyên bản.</li>
                        </ul>
                    </div>
                </div>

                {/* Right: Info */}
                <div className={styles.detailInfoSection}>
                    <h1 className={styles.detailTitle}>{product.name}</h1>

                    <div className={styles.ratingWrapper}>
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#c62828" stroke="#c62828">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                        ))}
                    </div>

                    <div className={styles.detailPrice}>{product.price}</div>

                    {/* New Options Table Layout */}
                    <div className={styles.optionsTable}>
                        <div className={styles.optionsTableRow}>
                            <div className={styles.optionsLabelCell}>Gói</div>
                            <div className={styles.optionsValueCell}>
                                {['250 gram', '500 gram', '1 kg tặng 100g'].map(opt => (
                                    <button
                                        key={opt}
                                        className={`${styles.optionBtn} ${selectedWeight === opt ? styles.activeOption : ''}`}
                                        onClick={() => setSelectedWeight(opt)}
                                    >
                                        {opt}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className={styles.optionsTableRow}>
                            <div className={styles.optionsLabelCell}>
                                Cỡ<br />xay
                            </div>
                            <div className={styles.optionsValueCell}>
                                {['Nguyên hạt', 'Pha Phin / Moka Pot', 'Pha Espresso', 'Pha Staresso'].map(opt => (
                                    <button
                                        key={opt}
                                        className={`${styles.optionBtn} ${selectedGrind === opt ? styles.activeOption : ''}`}
                                        onClick={() => setSelectedGrind(opt)}
                                    >
                                        {opt}
                                    </button>
                                ))}
                                <button className={styles.clearOption} onClick={() => { setSelectedWeight(''); setSelectedGrind(''); }}>Clear</button>
                            </div>
                        </div>
                    </div>

                    {/* Quantity & Buy */}
                    <div className={styles.buyActionRow}>
                        <div className={styles.quantityControl}>
                            <button className={styles.qtyBtn} onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                            <span className={styles.qtyValue}>{quantity}</span>
                            <button className={styles.qtyBtn} onClick={() => setQuantity(quantity + 1)}>+</button>
                        </div>
                        <button className={styles.addToCartBigBtn}>Mua hàng</button>
                    </div>

                    {/* Shipping Info Box */}
                    <div className={styles.shippingInfoBox}>
                        <div className={styles.shippingItem}>
                            <span className={styles.shippingTitle}>Miễn phí vận chuyển ⓘ</span>
                            Miễn phí vận chuyển đơn 1kg cà phê hoặc trên 3.000.000đ.
                        </div>
                        <div className={styles.shippingItem}>
                            <span className={styles.shippingTitle}>Hình thức thanh toán đa dạng ⓘ</span>
                            Trả thẳng qua thẻ, trả góp, chuyển khoản và thanh toán khi nhận hàng. Được kiểm tra hàng khi thanh toán. Thanh toán trả góp cho đơn hàng từ 3 triệu
                        </div>
                    </div>
                </div>
            </div>

            {/* ============================================================
               LOWER SECTIONS: SPECS & REVIEWS
               ============================================================ */}
            <div className={styles.productDetailsLower}>
                <h3 className={styles.sectionHeading}>Chi tiết sản phẩm</h3>
                <table className={styles.specsTable}>
                    <tbody>
                        {Object.entries(product.specs).map(([key, value]) => (
                            <tr key={key}>
                                <td>{key}</td>
                                <td>{value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <h3 className={styles.sectionHeading}>Mô tả sản phẩm & Hướng dẫn</h3>
                <div className={styles.descriptionText}>
                    <p>Khách hàng có thể chọn mua nguyên hạt hoặc xay sẵn theo nhu cầu. Vì cà phê được rang theo mức đậm (Dark) nên The Nob khuyến khích dùng cho pha Espresso, Phin, Moka Pot, Staresso hoặc ColdBrew.</p>

                    <h4>Phiên bản Arabica với cỡ rang đậm mới</h4>
                    <p>Điểm mạnh của hạt cà Arabica so với hạt cà Robusta đó là hương thơm nổi bật hơn, vì cà phê không quá mạnh và lượng caffein cũng thấp hơn. Mặc dù vậy, vị chua của cà Arabica có thể sẽ không hợp gu với các tín đồ cà phê ưa thích vị đắng truyền thống của hạt cà Robusta Việt Nam.</p>
                    <p style={{ marginTop: '10px' }}>Cà phê Arabica núi Min có thêm phiên bản rang đậm (Dark roast) với vị chua được giảm đi đáng kể, vị đắng và béo nổi bật hơn. Ngoài ra, mùi thơm đặc trưng của Arabica vẫn được giữ lại. Rất phù hợp với người đã quen với hương vị truyền thống pha Phin. Ngoài ra, hạt còn phù hợp cho pha máy Espresso, Moka pot, Staresso,...</p>

                    <h4>Quá trình sơ chế và rang</h4>
                    <p>Trước khi đem đi rang, cà phê nhân xanh đã được nhặt bỏ phần lớn các hạt không đủ tiêu chuẩn (defects) như hạt bị sâu, nhân vỡ, sứt mẻ, hạt tai voi. Sau đó sẽ được đem đi rang máy với máy rang hiện đại đảm bảo hạt cà phê được rang đều và chất lượng như mong muốn.</p>

                    <h4>Chất lượng cà phê (hương thơm và vị)</h4>
                    <p>Cà phê Arabica được nhập từ núi Min – Đà Lạt, Lâm Đồng, một trong những nơi trồng cà phê nổi tiếng nhất của Việt Nam, có nhiều điều kiện thích hợp về nhiệt độ, độ cao,... để cây cà phê được phát triển tốt. Chính vì vậy, hạt cà phê rang mộc sau khi pha rất thơm, body khá chắc, có hương của Caramel. Phiên bản rang đậm (Dark) với vị cà phê thiên về đắng và béo, vị chua ít hơn so với cỡ rang vừa (Medium).</p>
                </div>

                <h3 className={styles.sectionHeading}>Reviews</h3>
                <div className={styles.reviewsSection}>
                    {/* Review 1 */}
                    <div className={styles.reviewItem}>
                        <div className={styles.avatar}></div>
                        <div className={styles.reviewContent}>
                            <div className={styles.reviewerName}>
                                johnydang6
                            </div>
                            <div>
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} style={{ color: '#c62828' }}>★</span>
                                ))}
                                <span className={styles.reviewDate} style={{ marginLeft: '10px', fontSize: '12px', color: '#999' }}>11/12/2025</span>
                            </div>
                            <div className={styles.reviewText}>Sản phẩm rất tốt, chất lượng ngoài mong đợi !!!</div>
                            <div className={styles.reviewImages}>
                                {['/images/coffee_product_bag_1_1765379430870.png', '/images/coffee_product_bag_2_1765379460201.png', '/images/coffee_product_bag_3_1765379485481.png'].map((img, idx) => (
                                    <Image key={idx} src={img} alt="review" width={60} height={60} style={{ objectFit: 'contain', background: '#fff', border: '1px solid #eee' }} />
                                ))}
                            </div>

                            <div className={styles.reviewActions}>
                                <button className={`${styles.actionBtn} ${styles.replyBtn}`}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                    </svg>
                                    Phản hồi
                                </button>
                                <button className={`${styles.actionBtn} ${styles.likeBtn}`}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                                    </svg>
                                    25 likes
                                </button>
                                <button className={`${styles.actionBtn} ${styles.dislikeBtn}`}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>
                                    </svg>
                                    0 dislike
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Review 2 */}
                    <div className={styles.reviewItem}>
                        <div className={styles.avatar}></div>
                        <div className={styles.reviewContent}>
                            <div className={styles.reviewerName}>
                                micheal_jackson666
                            </div>
                            <div>
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} style={{ color: '#c62828' }}>★</span>
                                ))}
                                <span className={styles.reviewDate} style={{ marginLeft: '10px', fontSize: '12px', color: '#999' }}>5/12/2025</span>
                            </div>
                            <div className={styles.reviewText}>Giao hàng nhanh, chất lượng ổn, sẽ trở thành khách hàng thân quen</div>
                            <div className={styles.reviewImages}>
                                {['/images/coffee_product_bag_1_1765379430870.png', '/images/coffee_product_bag_2_1765379460201.png', '/images/coffee_product_bag_3_1765379485481.png'].map((img, idx) => (
                                    <Image key={idx} src={img} alt="review" width={60} height={60} style={{ objectFit: 'contain', background: '#fff', border: '1px solid #eee' }} />
                                ))}
                            </div>
                            <div className={styles.reviewActions}>
                                <button className={`${styles.actionBtn} ${styles.replyBtn}`}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                    </svg>
                                    Phản hồi
                                </button>
                                <button className={`${styles.actionBtn} ${styles.likeBtn}`}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                                    </svg>
                                    12 likes
                                </button>
                                <button className={`${styles.actionBtn} ${styles.dislikeBtn}`}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>
                                    </svg>
                                    0 dislike
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.relatedSection}>
                    <h3 className={styles.sectionHeading}>Sản phẩm liên quan</h3>
                    <div className={styles.productGrid}>
                        {relatedProducts.map(prod => (
                            <div key={prod.id} className={styles.productCard}>
                                <div className={styles.productImageWrapper}>
                                    <Image
                                        src={prod.image}
                                        alt={prod.name}
                                        width={200}
                                        height={200}
                                        className={styles.productImage}
                                    />
                                </div>
                                <div className={styles.productInfo}>
                                    <p className={styles.productCategory}>{prod.category}</p>
                                    <h3 className={styles.productName}>{prod.name}</h3>
                                    <span className={styles.productPrice}>{prod.price}</span>
                                    {/* Link to detail page dynamically */}
                                    <Link href={`/products/${prod.id}`}>
                                        <button className={styles.addToCartBtn}>Mua ngay</button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Banner (Reused) */}
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
