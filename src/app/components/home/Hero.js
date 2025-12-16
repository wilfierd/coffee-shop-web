import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.bgWrapper}>
                <Image
                    src="/images/brewviet_hero_bg_1765380384101.png"
                    alt="BrewViet Vietnamese Coffee"
                    fill
                    className={styles.heroImage}
                    priority
                />
                <div className={styles.overlay}></div>
            </div>
            <div className={styles.content}>
                <span className={styles.subtitle}>Khám phá cà phê Việt chính gốc</span>
                <h1 className={styles.title}>Coffee</h1>
                <p className={styles.description}>
                    Kết nối truyền thống và hiện đại trong từng tách cà phê
                </p>
                <a href="#shop" className={styles.ctaButton}>Đặt hàng ngay</a>
            </div>
        </section>
    );
}
