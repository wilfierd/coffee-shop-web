import Image from 'next/image';
import styles from './ProductGrid.module.css';

const products = [
    {
        id: 1,
        name: "Ethiopian Yirgacheffe",
        price: "$24.00",
        image: "/images/coffee_product_bag_1_1765379430870.png",
        rating: "★★★★★"
    },
    {
        id: 2,
        name: "Colombian Supremo",
        price: "$21.00",
        image: "/images/coffee_product_bag_2_1765379460201.png",
        rating: "★★★★☆"
    },
    {
        id: 3,
        name: "Dark Roast Blend",
        price: "$19.50",
        image: "/images/coffee_product_bag_3_1765379485481.png",
        rating: "★★★★★"
    }
];

export default function ProductGrid() {
    return (
        <section className={styles.gridSection} id="menu">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2>Our Bestsellers</h2>
                    <p className={styles.subtitle}>Hand-picked for the true connoisseur.</p>
                </div>
                <div className={styles.grid}>
                    {products.map((product) => (
                        <div key={product.id} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={300}
                                    height={400}
                                    className={styles.image}
                                />
                            </div>
                            <div className={styles.info}>
                                <span className={styles.rating}>{product.rating}</span>
                                <h3>{product.name}</h3>
                                <span className={styles.price}>{product.price}</span>
                                <button className={styles.addToCart}>Add to Cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
