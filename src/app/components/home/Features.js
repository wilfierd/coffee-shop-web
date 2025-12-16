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
            description: "Beans that provides great taste",
            id: 'manual',
            imageSrc: "/images/coffee-beans 1.png"
        },
        {
            title: "Di Động",
            description: "We provide the highest quality",
            id: 'mobile',
            imageSrc: "/images/badge 1.png"
        },
        {
            title: "Expresso",
            description: "Coffee like you have never tasted",
            id: 'espresso',
            imageSrc: "/images/coffee-cup 1.png"
        },
        {
            title: "Đồ điện tử",
            description: "Our Coffee prices are easy to afford",
            id: 'electronic',
            imageSrc: "/images/best-price 1.png"
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

                    return feature.id === 'manual' ? (
                        <Link href={isActive ? "/" : "/?category=manual"} key={index} scroll={false}>
                            {CardContent}
                        </Link>
                    ) : (
                        <Link href="/" key={index} scroll={false}>
                            {CardContent}
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}
