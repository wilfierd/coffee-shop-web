"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '../context/CartContext';
import styles from './cart.module.css';

export default function CartPage() {
    const { cartItems, updateQuantity, removeFromCart, getCartTotal } = useCart();
    const [showConfirm, setShowConfirm] = React.useState(null); // ID of item to delete

    const formatPrice = (price) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
    };

    const handleQuantityChange = (id, newQty) => {
        if (newQty < 1) {
            setShowConfirm(id);
        } else {
            updateQuantity(id, newQty);
        }
    };

    const confirmDelete = () => {
        removeFromCart(showConfirm);
        setShowConfirm(null);
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
                        <span className={styles.stepLabel}>Thanh toán</span>
                    </div>
                    <div className={styles.connector}></div>

                    <div className={styles.step}>
                        <div className={styles.stepIcon}>3</div>
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
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item) => (
                                    <tr key={item.id}>
                                        <td data-label="Sản phẩm">
                                            <div className={styles.productInfo}>
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
                                                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                                >
                                                    -
                                                </button>
                                                <span className={styles.qtyValue}>{item.quantity}</span>
                                                <button
                                                    className={styles.qtyBtn}
                                                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </td>
                                        <td data-label="Tổng tiền">
                                            <span className={styles.total}>{formatPrice(item.price * item.quantity)}</span>
                                        </td>
                                        <td title="Xóa">
                                            <button
                                                className={styles.deleteBtn}
                                                onClick={() => setShowConfirm(item.id)}
                                            >
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <polyline points="3 6 5 6 21 6"></polyline>
                                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                </svg>
                                            </button>
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
                                <Link href="/checkout" className={styles.checkoutBtn}>Thanh toán</Link>
                            </div>
                        </div>
                    </>
                )}
            </div>

            {/* Confirmation Modal */}
            {showConfirm && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modal}>
                        <h3>Xác nhận xóa</h3>
                        <p>Bạn có chắc muốn xóa sản phẩm này khỏi giỏ hàng?</p>
                        <div className={styles.modalActions}>
                            <button className={styles.cancelBtn} onClick={() => setShowConfirm(null)}>Hủy</button>
                            <button className={styles.confirmBtn} onClick={confirmDelete}>Xóa</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
