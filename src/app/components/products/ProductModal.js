"use client";
import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '../../context/CartContext';
import styles from './ProductModal.module.css';

export default function ProductModal({ product, onClose }) {
    const router = useRouter();
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
    const [zoomStyle, setZoomStyle] = useState({ display: 'none' });
    const imageRef = useRef(null);

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = ((e.pageX - left) / width) * 100;
        const y = ((e.pageY - top) / height) * 100;

        setZoomStyle({
            display: 'block',
            backgroundImage: `url(${product.image})`,
            backgroundPosition: `${x}% ${y}%`,
            backgroundSize: '200%'
        });
    };

    const handleMouseLeave = () => {
        setZoomStyle({ display: 'none' });
    };

    if (!product) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>&times;</button>

                {/* Left Column: Image with Zoom */}
                <div className={styles.imageSection}>
                    <div className={styles.imageContainer}>
                        <img
                            src={product.image}
                            alt={product.name}
                            className={styles.mainImage}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            ref={imageRef}
                        />
                        {/* Zoom Overlay */}
                        <div className={styles.zoomResult} style={zoomStyle} />
                    </div>
                </div>

                {/* Right Column: Info */}
                <div className={styles.infoSection}>
                    <h2 className={styles.title}>{product.name}</h2>
                    <div className={styles.subtitle}>Thông tin</div>

                    {/* Text List Specs */}
                    <div className={styles.specList}>
                        <p><strong>Thương hiệu:</strong> {product.brand || 'PRESSOCO'}</p>
                        <p><strong>Phân loại:</strong> {product.type}</p>
                        <p><strong>Màu sắc:</strong> {product.color}</p>
                        <p><strong>Chất liệu:</strong> {product.material}</p>
                        <p><strong>Kích thước (cm):</strong> {product.dimensions}</p>
                        <p><strong>Trọng lượng:</strong> {product.weight}</p>
                        <p><strong>Dung tích:</strong> {product.capacity}</p>
                        <p><strong>Độ cứng:</strong> {'>50HRC'}</p>
                        <p><strong>Tỷ lệ bột mịn:</strong> {product.consistency || '<5%'}</p>
                    </div>

                    {/* Table Specs */}
                    <table className={styles.miniTable}>
                        <tbody>
                            <tr>
                                <td><strong>Mã sản phẩm</strong></td>
                                <td>PR-HG420CNCS</td>
                            </tr>
                            <tr>
                                <td><strong>Phân Loại</strong></td>
                                <td>{product.type}</td>
                            </tr>
                            <tr>
                                <td><strong>Màu Sắc</strong></td>
                                <td>{product.color}</td>
                            </tr>
                        </tbody>
                    </table>

                    {/* Price */}
                    <div className={styles.priceRow}>
                        <span className={styles.priceLabel}>Giá bán:</span>
                        <span className={styles.priceValue}>{product.price}</span>
                    </div>

                    {/* Quantity */}
                    <div className={styles.quantityRow}>
                        <span className={styles.quantityLabel}>Số lượng :</span>
                        <div className={styles.quantityControl}>
                            <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                            <span>{quantity}</span>
                            <button onClick={() => setQuantity(quantity + 1)}>+</button>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className={styles.actions}>
                        <button
                            className={styles.addToCartBtn}
                            onClick={() => {
                                const numericPrice = parseFloat(product.price.replace(/[^\d]/g, ''));
                                addToCart({ ...product, price: numericPrice }, quantity);
                                onClose(); // Close modal after adding
                                // Could add a toast notification here later
                            }}
                        >
                            Thêm vào giỏ
                        </button>
                        <button
                            className={styles.buyNowBtn}
                            onClick={() => {
                                const numericPrice = parseFloat(product.price.replace(/[^\d]/g, ''));
                                addToCart({ ...product, price: numericPrice }, quantity);
                                onClose();
                                router.push('/cart');
                            }}
                        >
                            Đặt hàng ngay
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
