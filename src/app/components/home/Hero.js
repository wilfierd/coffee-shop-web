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
                    style={{ objectFit: 'cover' }}
                    priority
                />
                <div className={styles.overlay}></div>
            </div>
            <div className={styles.content}>
                <span className={styles.subtitle}>Khám phá cà phê Việt chính gốc</span>
                <h1 className={styles.title}>Coffee</h1>
                <p className={styles.description}>
                    Kết nối truyền thống và hiện đại trong từng tách cà phê. Trải nghiệm hương vị đậm đà của Việt Nam.
                </p>
                <a href="#shop" className={styles.ctaButton}>Shop Now</a>
            </div>
        </section>
    );
}
