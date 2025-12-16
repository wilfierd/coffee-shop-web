"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '../context/CartContext';
import styles from './cart.module.css';

export default function CartPage() {
    const { cartItems, updateQuantity, getCartTotal } = useCart();

    const formatPrice = (price) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
    };

    return (
        <div className={styles.cartPage}>
            {/* Dark Top Banner for Header Visibility */}
            <div className={styles.topBanner}></div>

            <div className={styles.container}>
                <Link href="/" className={styles.backButton}>
                    ← Tiếp tục mua sắm
                </Link>

                {/* Progress Indicator (Shopee Style) */}
                <div className={styles.progressContainer}>
                    <div className={`${styles.step} ${styles.stepActive}`}>
                        <div className={styles.stepIcon}>1</div>
                        <span className={styles.stepLabel}>Giỏ hàng</span>
                    </div>
                    <div className={`${styles.connector} ${styles.connectorActive}`}></div>

                    <div className={styles.step}>
                        <div className={styles.stepIcon}>2</div>
                        <span className={styles.stepLabel}>Đặt hàng</span>
                    </div>
                    <div className={styles.connector}></div>

                    <div className={styles.step}>
                        <div className={styles.stepIcon}>3</div>
                        <span className={styles.stepLabel}>Thanh toán</span>
                    </div>
                    <div className={styles.connector}></div>

                    <div className={styles.step}>
                        <div className={styles.stepIcon}>4</div>
                        <span className={styles.stepLabel}>Hoàn tất</span>
                    </div>
                </div>

                {cartItems.length === 0 ? (
                    <div className={styles.emptyCart}>
                        <p>Giỏ hàng của bạn đang trống.</p>
                        <br />
                        <Link href="/" className={styles.updateBtn}>Mua sắm ngay</Link>
                    </div>
                ) : (
                    <>
                        <table className={styles.cartTable}>
                            <thead>
                                <tr>
                                    <th>Sản phẩm</th>
                                    <th>Giá bán</th>
                                    <th>Số lượng</th>
                                    <th>Tổng tiền</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item) => (
                                    <tr key={item.id}>
                                        <td data-label="Sản phẩm">
                                            <div className={styles.productInfo}>
                                                {/* Image removed as per user request */}
                                                <div className={styles.productDetails}>
                                                    <span className={styles.productName}>{item.name}</span>
                                                    <span className={styles.productMeta}>
                                                        Dung tích: {item.weight || 'N/A'}<br />
                                                        {item.grind && `Loại hạt: ${item.grind}`}
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td data-label="Giá bán">
                                            <span className={styles.price}>{formatPrice(item.price)}</span>
                                        </td>
                                        <td data-label="Số lượng">
                                            <div className={styles.quantityControl}>
                                                <button
                                                    className={styles.qtyBtn}
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                >
                                                    -
                                                </button>
                                                <span className={styles.qtyValue}>{item.quantity}</span>
                                                <button
                                                    className={styles.qtyBtn}
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </td>
                                        <td data-label="Tổng tiền">
                                            <span className={styles.total}>{formatPrice(item.price * item.quantity)}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className={styles.summary}>
                            <div className={styles.grandTotal}>
                                <span>Tổng tiền</span>
                                <span>{formatPrice(getCartTotal())}</span>
                            </div>
                            <div className={styles.actions}>
                                <button className={styles.updateBtn}>Cập nhật giỏ hàng</button>
                                <button className={styles.checkoutBtn}>Thanh toán</button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
