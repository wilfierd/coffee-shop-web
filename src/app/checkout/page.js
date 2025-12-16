"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import styles from './checkout.module.css';

export default function CheckoutPage() {
    const { cartItems, updateQuantity, getCartTotal } = useCart();
    // Assuming standard shipping fee or logic
    const shippingFee = 0;
    const total = getCartTotal() + shippingFee;

    // State for Payment & Modal
    const [paymentMethod, setPaymentMethod] = useState('cod'); // 'cod' or 'transfer'
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [countdown, setCountdown] = useState(300); // 5 minutes (300 seconds)

    // Step Control
    const [currentStep, setCurrentStep] = useState(2); // 2: Payment, 3: Success

    // Timer Logic
    useEffect(() => {
        let timer;
        if (showPaymentModal && countdown > 0) {
            timer = setInterval(() => {
                setCountdown((prev) => prev - 1);
            }, 1000);
        } else if (countdown === 0) {
            // Optionally handle timer expiration, e.g., close modal or show message
            setShowPaymentModal(false);
            alert("Thời gian chuyển khoản đã hết. Vui lòng thử lại.");
        }
        return () => clearInterval(timer);
    }, [showPaymentModal, countdown]);

    const formatPrice = (price) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    const handleConfirmPayment = () => {
        if (paymentMethod === 'transfer') {
            setShowPaymentModal(true);
            setCountdown(300); // Reset timer
        } else {
            // Assume success for COD and move to Step 3
            setCurrentStep(3);
        }
    };

    // Helper to change steps via progress bar
    const handleStepClick = (step) => {
        if (step >= 2) setCurrentStep(step);
    };

    return (
        <div className={styles.checkoutPage}>
            {/* Top Banner */}
            <div className={styles.topBanner}></div>

            <div className={styles.container}>
                {currentStep === 2 && (
                    <Link href="/cart" className={styles.backButton}>
                        ← Quay lại giỏ hàng
                    </Link>
                )}
                {currentStep === 3 && (
                    <Link href="/" className={styles.backButton}>
                        ← Tiếp tục mua sắm
                    </Link>
                )}

                {/* Dynamic Title based on Step */}
                <h1 className={styles.title} style={currentStep === 3 ? { display: 'none' } : {}}>
                    Thanh Toán
                </h1>

                {/* Progress Indicator (Shopee Style) - Step 2 Active */}
                <div className={styles.progressContainer}>
                    <div className={`${styles.step} ${styles.stepActive}`}>
                        <div className={styles.stepIcon}>1</div>
                        <span className={styles.stepLabel}>Giỏ hàng</span>
                    </div>
                    <div className={`${styles.connector} ${styles.connectorActive}`}></div>

                    <div
                        className={`${styles.step} ${currentStep >= 2 ? styles.stepActive : ''} ${styles.stepClickable}`}
                        onClick={() => handleStepClick(2)}
                    >
                        <div className={styles.stepIcon}>2</div>
                        <span className={styles.stepLabel}>Thanh toán</span>
                    </div>
                    <div className={`${styles.connector} ${currentStep >= 3 ? styles.stepActive : ''} ${styles.connectorActive}`}></div>

                    <div
                        className={`${styles.step} ${currentStep >= 3 ? styles.stepActive : ''} ${styles.stepClickable}`}
                        onClick={() => handleStepClick(3)}
                    >
                        <div className={styles.stepIcon}>3</div>
                        <span className={styles.stepLabel}>Hoàn tất</span>
                    </div>
                </div>

                {/* Step 2: Payment Form */}
                {currentStep === 2 && (
                    <>
                        {/* Order Summary Table */}
                        <table className={styles.orderTable}>
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
                                        <td>
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
                                        <td className={styles.price}>{formatPrice(item.price)}</td>
                                        <td>
                                            <div className={styles.qtyControl}>
                                                <button
                                                    className={styles.qtyBtn}
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                >-</button>
                                                <span className={styles.qtyValue}>{item.quantity}</span>
                                                <button
                                                    className={styles.qtyBtn}
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                >+</button>
                                            </div>
                                        </td>
                                        <td className={styles.total}>{formatPrice(item.price * item.quantity)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* Split Layout: Customer Info & Payment */}
                        <div className={styles.splitLayout}>
                            {/* Left Column: Information */}
                            <div className={styles.leftColumn}>
                                <h3 className={styles.sectionTitle}>Thông tin khách hàng</h3>

                                <div className={styles.formGroup}>
                                    <input type="text" placeholder="Họ và tên" className={styles.input} />
                                </div>
                                <div className={styles.formGroup}>
                                    <input type="text" placeholder="Số điện thoại" className={styles.input} />
                                </div>
                                <div className={styles.formGroup}>
                                    <input type="email" placeholder="Địa chỉ email" className={styles.input} />
                                </div>
                                <div className={styles.formGroup}>
                                    <input type="text" placeholder="Địa chỉ giao hàng" className={styles.input} />
                                </div>
                                <div className={styles.formGroup}>
                                    <select className={styles.select}>
                                        <option>Hà Nội</option>
                                        <option>TP. Hồ Chí Minh</option>
                                        <option>Đà Nẵng</option>
                                    </select>
                                </div>
                                {/* Note area based on design bottom left box */}
                                <h3 className={styles.sectionTitle} style={{ marginTop: '30px', fontSize: '16px' }}>Ghi chú cho đơn hàng</h3>
                                <textarea
                                    className={styles.textarea}
                                    placeholder="Nhập ghi chú (ví dụ: giao giờ hành chính...)"
                                ></textarea>
                            </div>

                            {/* Right Column: Payment & Shipping */}
                            <div className={styles.rightColumn}>
                                <h3 className={styles.sectionTitle}>Giao hàng & Thanh toán</h3>

                                <div className={styles.summaryBlock}>
                                    <div className={styles.summaryRow}>
                                        <span>Shipping</span>
                                        <div>
                                            <div className={styles.radioLabel}>
                                                <input type="radio" name="shipping" defaultChecked className={styles.radioInput} />
                                                <span>Giao hàng tận nơi</span>
                                            </div>
                                            <div className={styles.radioLabel}>
                                                <input type="radio" name="shipping" className={styles.radioInput} />
                                                <span>Nhận tại cửa hàng</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.totalRow}>
                                    <span>Tổng tiền</span>
                                    <span>{formatPrice(total)}</span>
                                </div>

                                <div style={{ margin: '20px 0', fontSize: '14px', color: '#777', fontStyle: 'italic' }}>
                                    <p>* Phí vận chuyển sẽ được tính khi xác nhận đơn hàng</p>
                                </div>

                                <div className={styles.radioGroup}>
                                    <div className={styles.radioLabel}>
                                        <input
                                            type="radio"
                                            name="payment"
                                            value="cod"
                                            checked={paymentMethod === 'cod'}
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                            className={styles.radioInput}
                                        />
                                        <span>Thanh toán khi nhận hàng (COD)</span>
                                    </div>
                                    <div className={styles.radioLabel}>
                                        <input
                                            type="radio"
                                            name="payment"
                                            value="transfer"
                                            checked={paymentMethod === 'transfer'}
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                            className={styles.radioInput}
                                        />
                                        <span>Chuyển khoản ngân hàng</span>
                                    </div>
                                </div>

                                <button className={styles.confirmBtn} onClick={handleConfirmPayment}>
                                    Xác nhận thanh toán
                                </button>
                            </div>
                        </div>
                    </>
                )}

                {/* Step 3: Success View */}
                {currentStep === 3 && (
                    <div className={styles.successContainer}>
                        {/* Badge Icon */}
                        <div className={styles.successIcon}>✓</div>

                        <h2 className={styles.successTitle}>Thanh toán thành công!!</h2>
                        <p className={styles.successMessage}>Đơn hàng đã được xét duyệt, cảm ơn đã tin tưởng sản phẩm của chúng tôi ❤️❤️❤️</p>

                        <div className={styles.orderDetailBox}>
                            <h3 className={styles.boxTitle}>Chi tiết đơn hàng</h3>
                            <div className={styles.detailGrid}>
                                <div className={styles.detailRow}><span className={styles.label}>Mã đơn hàng:</span> <span className={styles.pinkText}>#DH001</span></div>
                                <div className={styles.detailRow}><span className={styles.label}>Trạng thái:</span> <span className={styles.pinkText}>Đã thanh toán</span></div>

                                <div className={styles.detailRow}><span className={styles.label}>Ngày đặt hàng:</span> <span className={styles.value}>11/12/2025 - 13:00 AM</span></div>
                                <div className={styles.detailRow}><span className={styles.label}>Địa chỉ giao hàng:</span> <span className={styles.pinkText}>Km9, Nguyễn Trãi, Thanh Xuân, Hà Nội</span></div>

                                <div className={styles.detailRow}><span className={styles.label}>Tổng thanh toán:</span> <span className={styles.pinkText}>1,700,000 đ</span></div>
                                <div className={styles.detailRow}><span className={styles.label}>Dự kiến giao hàng:</span> <span className={styles.pinkText}>Ngày 13/12/2025 - 15/12/2025</span></div>

                                <div className={styles.detailRow}><span className={styles.label}>Hình thức thanh toán:</span> <span className={styles.pinkText} style={{ textDecoration: 'underline' }}>Chuyển Khoản</span></div>
                                <div className={styles.detailRow}><span className={styles.label}>Yêu cầu:</span></div>

                                <div className={styles.detailRow}><span className={styles.label}>Mã sản phẩm:</span> <span className={styles.pinkText}>#pi0023 , #pi0012</span></div>
                            </div>
                        </div>

                        <div className={styles.actionButtons}>
                            <button className={styles.btnSecondary}>Quản lí đơn hàng</button>
                            <button className={styles.btnPrimary}>Xem chi tiết đơn hàng</button>
                        </div>
                    </div>
                )}
            </div>

            {/* Payment Modal */}
            {showPaymentModal && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <div className={styles.modalHeader}>
                            <h3 className={styles.modalTitle}>QR chuyển khoản</h3>
                            <button className={styles.closeBtn} onClick={() => setShowPaymentModal(false)}>×</button>
                        </div>
                        <div className={styles.modalBody}>
                            <p className={styles.timerMsg}>
                                Vui lòng thao tác chuyển khoản trong: <span className={styles.timer}>{formatTime(countdown)}</span> nữa
                            </p>

                            <div className={styles.qrContainer}>
                                <img
                                    src="/images/bank.jpg"
                                    alt="Mã QR Chuyển khoản"
                                    className={styles.qrImage}
                                />
                            </div>

                            <div className={styles.bankInfo}>
                                <span className={styles.accountNumber}>931080499999</span>
                            </div>

                            <p className={styles.transferNote}>
                                * Nội dung chuyển khoản: Tên + SĐT
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
