"use client";

import { useState } from 'react';
import ProductModal from './ProductModal';
import styles from './Collection.module.css';

const products = [
  {
    id: 1,
    name: "Comandante C40 MK4 Nitro Blade - Black",
    price: "6.850.000₫",
    image: "/images/coffee_product_bag_1_1765379430870.png", // Replaced broken external link
    type: "Hand Grinder",
    brand: "Comandante",
    color: "Black",
    material: "Stainless Steel, Nitrogen High Alloy",
    weight: "740g",
    capacity: "40g",
    dimensions: "150 x 60 mm",
    consistency: "Excellent (Espresso to French Press)"
  },
  {
    id: 2,
    name: "Timemore Chestnut C3 Grid - Black",
    price: "1.490.000₫",
    image: "/images/coffee_product_bag_2_1765379460201.png",
    type: "Hand Grinder",
    brand: "Timemore",
    color: "Black",
    material: "Aluminum Alloy, Stainless Steel",
    weight: "430g",
    capacity: "25g",
    dimensions: "147 x 52 mm",
    consistency: "Great for Pour Over"
  },
  {
    id: 3,
    name: "1Zpresso K-Ultra - Iron Gray",
    price: "4.290.000₫",
    image: "/images/coffee_product_bag_3_1765379485481.png",
    type: "Hand Grinder",
    brand: "1Zpresso",
    color: "Iron Gray",
    material: "Aluminum Alloy, Hostagon stainless steel burr",
    weight: "700g",
    capacity: "35-40g",
    dimensions: "195 x 185 x 60 mm",
    consistency: "Versatile (All methods)"
  },
  {
    id: 4,
    name: "Timemore Chestnut C3 ESP - Green",
    price: "1.690.000₫",
    image: "/images/brewviet_product_machine_1765380487515.png",
    type: "Hand Grinder",
    brand: "Timemore",
    color: "Green",
    material: "Aluminum Alloy",
    weight: "430g",
    capacity: "25g",
    dimensions: "147 x 52 mm",
    consistency: "Optimized for Espresso"
  },
  {
    id: 5,
    name: "Comandante C40 MK4 - American Cherry",
    price: "7.150.000₫",
    image: "/images/brewviet_product_phin_1765380470675.png",
    type: "Hand Grinder",
    brand: "Comandante",
    color: "Wood (Cherry)",
    material: "Stainless Steel, Natural Wood Veneer",
    weight: "740g",
    capacity: "40g",
    dimensions: "150 x 60 mm",
    consistency: "Excellent"
  },
  {
    id: 6,
    name: "Timemore Nano Manual Grinder",
    price: "2.650.000₫",
    image: "/images/brewviet_product_beans_1765380508530.png",
    type: "Hand Grinder",
    brand: "Timemore",
    color: "Black / Diamond",
    material: "Aluminum Alloy, Walnut",
    weight: "360g",
    capacity: "15g",
    dimensions: "100 x 45 mm (Foldable)",
    consistency: "Portable Precision"
  },
  {
    id: 7,
    name: "Fellow Stagg EKG Electric Kettle 0.9L",
    price: "4.990.000₫",
    image: "/images/coffee_product_bag_1_1765379430870.png",
    type: "Kettle",
    brand: "Fellow",
    color: "Matte Black",
    material: "Stainless Steel, Plastic",
    weight: "1274g",
    capacity: "0.9L",
    dimensions: "292 x 171 x 203 mm",
    consistency: "PID Temp Control"
  },
  {
    id: 8,
    name: "Timemore Black Mirror Basic Plus",
    price: "1.090.000₫",
    image: "/images/coffee_product_bag_2_1765379460201.png",
    type: "Scale",
    brand: "Timemore",
    color: "Black",
    material: "Plastic",
    weight: "380g",
    capacity: "2000g (0.1g accuracy)",
    dimensions: "152 x 130 x 26 mm",
    consistency: "Fast Response"
  }
];

export default function Collection() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Bộ sưu tập</h2>
      <p className={styles.subtitle}>DỤNG CỤ PHA CHẾ THỦ CÔNG & CHUYÊN NGHIỆP</p>

      <div className={styles.grid}>
        {products.map((product) => (
          <div
            key={product.id}
            className={styles.card}
            onClick={() => setSelectedProduct(product)} // Open Modal trigger
          >
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
            <button className={styles.button}>Xem chi tiết</button>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
}
