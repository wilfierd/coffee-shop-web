import Image from 'next/image';
import styles from './Collection.module.css';

const collection = [
    {
        id: 1,
        title: "Phin Truyen Thong",
        subtitle: "Dung cu pha che",
        image: "/images/brewviet_product_phin_1765380470675.png",
        button: "Xem chi tiet"
    },
    {
        id: 2,
        title: "May Pha Coffee",
        subtitle: "Cong nghe hien dai",
        image: "/images/brewviet_product_machine_1765380487515.png",
        button: "Xem chi tiet"
    },
    {
        id: 3,
        title: "Hat Coffee",
        subtitle: "Huong vi tuyet hao",
        image: "/images/brewviet_product_beans_1765380508530.png",
        button: "Xem chi tiet"
    }
];

export default function Collection() {
    return (
        <section className={styles.section} id="shop">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2>Bo suu tap</h2>
                    <p>Experience flavors of coffee & tea. Taste is a never ending quest of waiting.</p>
                </div>
                <div className={styles.grid}>
                    {collection.map((item) => (
                        <div key={item.id} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={300}
                                    height={300}
                                    className={styles.image}
                                />
                            </div>
                            <div className={styles.info}>
                                <h3>{item.title}</h3>
                                <p>{item.subtitle}</p>
                                <button className={styles.button}>{item.button}</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
