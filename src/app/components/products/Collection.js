"use client";

import styles from './Collection.module.css';

const products = [
    {
        id: 1,
        name: "Comandante C40 MK4 Nitro Blade - Black",
        price: "6.850.000₫",
        image: "https://product.hstatic.net/1000366299/product/comandante_c40_mk4_black_1_18e10080340d4e389336102cc0436531_master.jpg",
        type: "Hand Grinder"
    },
    {
        id: 2,
        name: "Timemore Chestnut C3 Grid - Black",
        price: "1.490.000₫",
        image: "https://product.hstatic.net/1000366299/product/timemore_chestnut_c3_black_18e10080340d4e389336102cc0436531_master.jpg",
        type: "Hand Grinder"
    },
    {
        id: 3,
        name: "1Zpresso K-Ultra - Iron Gray",
        price: "4.290.000₫",
        image: "https://product.hstatic.net/1000366299/product/1zpresso_k_ultra_iron_gray_1_72658864754746078235688688461803_master.jpg",
        type: "Hand Grinder"
    },
    {
        id: 4,
        name: "Timemore Chestnut C3 ESP - Green",
        price: "1.690.000₫",
        image: "https://product.hstatic.net/1000366299/product/timemore_c3_esp_green_1_688688461803_master.jpg",
        type: "Hand Grinder"
    },
    {
        id: 5,
        name: "Comandante C40 MK4 - American Cherry",
        price: "7.150.000₫",
        image: "https://product.hstatic.net/1000366299/product/comandante_c40_mk4_american_cherry_1_18e10080340d4e389336102cc0436531_master.jpg",
        type: "Hand Grinder"
    },
    {
        id: 6,
        name: "Timemore Nano Manual Grinder",
        price: "2.650.000₫",
        image: "https://product.hstatic.net/1000366299/product/timemore_nano_1_18e10080340d4e389336102cc0436531_master.jpg",
        type: "Hand Grinder"
    },
    {
        id: 7,
        name: "Fellow Stagg EKG Electric Kettle 0.9L",
        price: "4.990.000₫",
        image: "https://product.hstatic.net/1000366299/product/fellow_stagg_ekg_coffee_kettle_matte_black_1_2f150493074246009895282717056463_master.jpg",
        type: "Kettle"
    },
    {
        id: 8,
        name: "Timemore Black Mirror Basic Plus",
        price: "1.090.000₫",
        image: "https://product.hstatic.net/1000366299/product/timemore_black_mirror_basic_plus_1_18e10080340d4e389336102cc0436531_master.jpg",
        type: "Scale"
    }
];

export default function Collection() {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Bộ sưu tập</h2>
            <p className={styles.subtitle}>DỤNG CỤ PHA CHẾ THỦ CÔNG & CHUYÊN NGHIỆP</p>

            <div className={styles.grid}>
                {products.map((product) => (
                    <div key={product.id} className={styles.card}>
                        <div className={styles.imageContainer}>
                            <img
                                src={product.image}
                                alt={product.name}
                                className={styles.image}
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "https://placehold.co/400x500/f5f5f5/5c4033?text=" + encodeURIComponent(product.name);
                                }}
                            />
                        </div>
                        <h3 className={styles.productName}>{product.name}</h3>
                        <p className={styles.price}>{product.price}</p>
                        <button className={styles.button}>Mua ngay</button>
                    </div>
                ))}
            </div>
        </section>
    );
}
