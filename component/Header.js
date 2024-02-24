import React from 'react';
import styles from '@/styles/Header.module.css';

const Header = () => {
    return (
        <>
            <div className={styles.rect}>
                <div className={styles.menu}>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact Us</a>
                    <a href="#" className={styles['sign-in']}>Sign In</a>
                    <a href="#" className={styles['sign-up']}>Sign Up</a>
                </div>
            </div>
        </>
    );
};

export default Header;
