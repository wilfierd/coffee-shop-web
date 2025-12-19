import Image from 'next/image';
import Link from 'next/link';
import styles from './Recover.module.css';

export default function Recover({
    title = "Khám phá hương vị tuyệt hảo",
    description = "Trải nghiệm cà phê đích thực với những hạt cà phê được tuyển chọn kỹ lưỡng. Chúng tôi mang đến cho bạn không gian thưởng thức tuyệt vời và những sản phẩm chất lượng nhất.",
    buttonText = "Mua ngay",
    imageSrc = "/images/brewviet_spill_beans_1765380412141.png",
    onButtonClick
}) {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.text}>{description}</p>
                    <Link href="#shop" className={styles.button}>{buttonText}</Link>
                </div>
                {imageSrc && (
                    <div className={styles.imageWrapper}>
                        <Image
                            src={imageSrc}
                            alt="Section Image"
                            width={600}
                            height={400}
                            className={styles.image}
                        />
                    </div>
                )}
            </div>
        </section>
    );
}

