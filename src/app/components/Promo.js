import styles from './Promo.module.css';

export default function Promo() {
    return (
        <section className={styles.promo} id="about">
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2>Discover Our Story</h2>
                    <p>
                        Founded in 2010, CoffeeShop began with a simple mission: to serve the perfect cup of coffee.
                        We travel the world to find the finest beans, roasting them in small batches here in our shop
                        to bring out their unique flavors.
                    </p>
                    <button className={styles.button}>Read More</button>
                </div>
            </div>
        </section>
    );
}
