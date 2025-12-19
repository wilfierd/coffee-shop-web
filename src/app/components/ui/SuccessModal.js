import Link from 'next/link';
import styles from './SuccessModal.module.css';

const SuccessModal = ({ product, onClose }) => {
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <div className={styles.modalIcon}>
                    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#4caf50" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                </div>
                <h3>Thêm vào giỏ hàng thành công!</h3>
                <p>{product?.name}</p>
                <div className={styles.modalActions}>
                    <button className={styles.btnSecondary} onClick={onClose}>
                        Tiếp tục mua sắm
                    </button>
                    <Link href="/cart" className={styles.btnPrimary} onClick={onClose}>
                        Xem giỏ hàng
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SuccessModal;
