"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    // Load cart from localStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem('brewviet_cart');
        if (savedCart) {
            try {
                const items = JSON.parse(savedCart);
                // Fix for legacy items with broken hstatic links
                const patchedItems = items.map(item => {
                    if (item.image && item.image.startsWith('http')) {
                        return { ...item, image: "/images/coffee_product_bag_1_1765379430870.png" };
                    }
                    return item;
                });
                setCartItems(patchedItems);
            } catch (error) {
                console.error("Failed to parse cart items", error);
            }
        }
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('brewviet_cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product, quantity = 1) => {
        setCartItems(prevItems => {
            const existingItemIndex = prevItems.findIndex(item => item.id === product.id);
            if (existingItemIndex > -1) {
                // Item exists, update quantity
                const newItems = [...prevItems];
                newItems[existingItemIndex].quantity += quantity;
                return newItems;
            } else {
                // New item
                return [...prevItems, { ...product, quantity }];
            }
        });
    };

    const removeFromCart = (productId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    };

    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity < 1) return;
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === productId ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const getCartTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, getCartTotal }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}
