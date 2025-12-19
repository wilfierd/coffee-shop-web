"use client";

import { useState } from 'react';
import ProductModal from './ProductModal';
import styles from './Collection.module.css';

const products = [
  {
    id: 1,
    name: "Comandante C40 MK4 Nitro Blade - Black",
    price: "6.850.000₫",
    image: "/images/Rectangle 7.png", // Replaced broken external link
    type: "Cối Xay Tay",
    brand: "Comandante",
    color: "Đen",
    material: "Thép Không Gỉ, Hợp Kim Nitơ Cao Cấp",
    weight: "740g",
    capacity: "40g",
    dimensions: "150 x 60 mm",
    consistency: "Xuất sắc (Espresso đến French Press)"
  },
  {
    id: 2,
    name: "Timemore Chestnut C3 Grid - Black",
    price: "1.490.000₫",
    image: "/images/Rectangle 7(1).png",
    type: "Cối Xay Tay",
    brand: "Timemore",
    color: "Đen",
    material: "Hợp Kim Nhôm, Thép Không Gỉ",
    weight: "430g",
    capacity: "25g",
    dimensions: "147 x 52 mm",
    consistency: "Tuyệt vời cho Pour Over"
  },
  {
    id: 3,
    name: "1Zpresso K-Ultra - Iron Gray",
    price: "4.290.000₫",
    image: "/images/Rectangle 7(2).png",
    type: "Cối Xay Tay",
    brand: "1Zpresso",
    color: "Xám Sắt",
    material: "Hợp Kim Nhôm, Thép",
    weight: "700g",
    capacity: "35-40g",
    dimensions: "195 x 185 x 60 mm",
    consistency: "Đa dạng (Mọi phương pháp)"
  },
  {
    id: 4,
    name: "Timemore Chestnut C3 ESP - Green",
    price: "1.690.000₫",
    image: "/images/Rectangle 7(3).png",
    type: "Cối Xay Tay",
    brand: "Timemore",
    color: "Xanh Lục",
    material: "Hợp Kim Nhôm",
    weight: "430g",
    capacity: "25g",
    dimensions: "147 x 52 mm",
    consistency: "Tối ưu cho Espresso"
  },
  {
    id: 5,
    name: "Comandante C40 MK4 - American Cherry",
    price: "7.150.000₫",
    image: "/images/Rectangle 7(4).png",
    type: "Cối Xay Tay",
    brand: "Comandante",
    color: "Gỗ (Cherry)",
    material: "Thép Không Gỉ, Gỗ Tự Nhiên",
    weight: "740g",
    capacity: "40g",
    dimensions: "150 x 60 mm",
    consistency: "Xuất sắc"
  },
  {
    id: 6,
    name: "Timemore Nano Manual Grinder",
    price: "2.650.000₫",
    image: "/images/Rectangle 7(5).png",
    type: "Cối Xay Tay",
    brand: "Timemore",
    color: "Đen / Kim Cương",
    material: "Hợp Kim Nhôm, Gỗ Óc Chó",
    weight: "360g",
    capacity: "15g",
    dimensions: "100 x 45 mm (Gấp gọn)",
    consistency: "Di động chính xác"
  },
  {
    id: 7,
    name: "Fellow Stagg EKG Electric Kettle 0.9L",
    price: "4.990.000₫",
    image: "/images/Rectangle 7(6).png",
    type: "Ấm Đun",
    brand: "Fellow",
    color: "Đen Nhám",
    material: "Thép Không Gỉ, Nhựa",
    weight: "1274g",
    capacity: "0.9L",
    dimensions: "292 x 171 x 203 mm",
    consistency: "Kiểm soát nhiệt độ PID"
  },
  {
    id: 8,
    name: "Timemore Black Mirror Basic Plus",
    price: "1.090.000₫",
    image: "/images/Rectangle 7(7).png",
    type: "Cân Điện Tử",
    brand: "Timemore",
    color: "Đen",
    material: "Nhựa",
    weight: "380g",
    capacity: "2000g (Độ chính xác 0.1g)",
    dimensions: "152 x 130 x 26 mm",
    consistency: "Phản hồi nhanh"
  }
];

export default function Collection({ initialCategory }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Map URL category params to Product Types or Keywords
  const getFilteredProducts = () => {
    if (!initialCategory) return products;

    // Example Maps:
    // 'traditional' -> 'Cối Xay Tay' (Grinders), 'Cân Điện Tử' (Scales), 'Ấm Đun' (Kettles)
    const categoryMap = {
      'traditional': ['Cối Xay Tay', 'Ấm Đun', 'Cân Điện Tử'], // Tools
      'pour_over': ['Ấm Đun', 'Cối Xay Tay'],
      'immersion': ['Cối Xay Tay'],
      'portable': ['Cối Xay Tay'],
      'espresso': ['Cối Xay Tay']
    };

    const validTypes = categoryMap[initialCategory] || [];

    // If no specific mapping, show all (or handle empty)
    if (validTypes.length === 0) return products;

    return products.filter(p => validTypes.includes(p.type));
  };

  const displayedProducts = getFilteredProducts();

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Bộ sưu tập</h2>
      <p className={styles.subtitle}>DỤNG CỤ PHA CHẾ THỦ CÔNG & CHUYÊN NGHIỆP</p>

      <div className={styles.grid}>
        {displayedProducts.map((product) => (
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
