"use client";

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import styles from './Features.module.css';

export default function Features() {
    const searchParams = useSearchParams();
    const currentCategory = searchParams.get('category');

    const features = [
        {
            title: "Thu cong",
            description: "Dung cu pha che tinh te",
            id: 'manual',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className={styles.icon}>
                    <path d="M9,21V22H7V21A2,2 0 0,1 5,19V4A2,2 0 0,1 7,2H17A2,2 0 0,1 19,2V19A2,2 0 0,1 17,21V22H15V21H9M7,4V19H17V4H7Z" />
                </svg>
            )
        },
        {
            title: "Da Dang",
            description: "Viec chon lua hat ca phe",
            id: 'variety',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className={styles.icon}>
                    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M16.25,16.25L12,14.12L7.75,16.25L8.56,11.53L5.13,8.19L9.87,7.5L12,3.21L14.13,7.5L18.87,8.19L15.44,11.53L16.25,16.25Z" />
                </svg>
            )
        },
        {
            title: "Espresso",
            description: "Ca phe sua tuoi thom beo",
            id: 'espresso',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className={styles.icon}>
                    <path d="M2,21H20V19H2M20,8H18V5H20M20,3H4V13A4,4 0 0,0 8,17H14A4,4 0 0,0 18,13V10H20A2,2 0 0,0 22,8V5C22,3.89 21.1,3 20,3Z" />
                </svg>
            )
        },
        {
            title: "Trai nghiem",
            description: "Moi ly ca phe la mot su trai nghiem",
            id: 'experience',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className={styles.icon}>
                    <path d="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,16.18 18.25V20H5.5V18.25Z" />
                </svg>
            )
        }
    ];

    return (
        <section className={styles.features}>
            <div className={styles.container}>
                {features.map((feature, index) => {
                    const isActive = currentCategory === feature.id;
                    const CardContent = (
                        <div className={`${styles.card} ${isActive ? styles.activeCard : ''}`}>
                            <div className={styles.iconWrapper}>{feature.icon}</div>
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
