"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const FloatingControls = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Toggle Back-to-Top visibility
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div style={styles.wrapper}>
            {/* Contact Group (Phone/Zalo) */}
            <div style={styles.contactGroup}>
                <a href="https://zalo.me/0987654321" target="_blank" rel="noopener noreferrer" style={{ ...styles.contactBtn, backgroundColor: '#0068FF' }} title="Chat Zalo">
                    {/* Zalo Icon (SVG) */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                </a>
                <a href="tel:0987654321" style={{ ...styles.contactBtn, backgroundColor: '#4caf50' }} title="Call Hotline">
                    {/* Phone Icon (SVG) */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                </a>
            </div>

            {/* Back to Top */}
            <div className={`back-to-top ${isVisible ? 'visible' : ''}`} style={{ transition: 'opacity 0.3s', opacity: isVisible ? 1 : 0, pointerEvents: isVisible ? 'auto' : 'none' }}>
                <button onClick={scrollToTop} style={styles.backToTopBtn} title="Back to Top">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="18 15 12 9 6 15"></polyline>
                    </svg>
                </button>
            </div>
        </div>
    );
};

const styles = {
    wrapper: {
        position: 'fixed',
        bottom: '30px',
        right: '25px',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        alignItems: 'center',
    },
    contactGroup: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        marginBottom: '5px',
    },
    contactBtn: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        color: '#fff',
        textDecoration: 'none',
        boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
        transition: 'transform 0.2s',
        animation: 'pulse 2s infinite',
    },
    backToTopBtn: {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: '#333',
        color: '#fff',
        border: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
        transition: 'transform 0.3s, background-color 0.3s',
    }
};

export default FloatingControls;
