"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import styles from './Features.module.css';

export default function Features() {
    const searchParams = useSearchParams();
    const currentCategory = searchParams.get('category');

    const features = [
        {
            title: "Thủ công",
            description: "Mang lại hương vị tuyệt vời",
            id: 'traditional',
            imageSrc: "/images/coffee-beans 1.png"
        },
        {
            title: "Hiện đại",
            description: "Giá cà phê của chúng tôi rất phải chăng.",
            id: 'pour_over',
            imageSrc: "/images/pour.png"
        },
        {
            title: "Ngâm",
            description: "Cà phê mà bạn chưa từng nếm thử",
            id: 'immersion',
            imageSrc: "/images/coffee-cup 1.png"
        },
        {
            title: "Di động",
            description: "Hương vị bùng nổ và bao trùm cả căn phòng",
            id: 'portable',
            imageSrc: "/images/best-price 1.png"
        },
        {
            title: "Nâng cao",
            description: "Chúng tôi cung cấp chất lượng cao nhất",
            id: 'espresso',
            imageSrc: "/images/ant-design_shopping-outlined.png"
        }
    ];

    return (
        <section className={styles.features}>
            <div className={styles.container}>
                {features.map((feature, index) => {
                    const isActive = currentCategory === feature.id;
                    const CardContent = (
                        <div className={`${styles.card} ${isActive ? styles.activeCard : ''}`}>
                            <div className={styles.iconWrapper}>
                                <Image
                                    src={feature.imageSrc}
                                    alt={feature.title}
                                    width={50}
                                    height={50}
                                    className={styles.icon}
                                />
                            </div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    );

                    return (
                        <Link
                            href={isActive ? "/" : `/?category=${feature.id}`}
                            key={feature.id}
                            scroll={false}
                            className={styles.link} // Added class for easier styling if needed
                        >
                            {CardContent}
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}
