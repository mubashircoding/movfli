import React from 'react';
import styles from "@/app/styles/navbar.module.css"
import Link from "next/link";
import Image from "next/image";
import Logo from '../../../public/logo.png'
import Nav from './Nav';
const Header = () => {
    return (
        <header className={styles.main_header}>
            <div className={styles.navbar_brand}>
                <Link href='/'>
                    <Image src={Logo} alt='my logo image' width={70} height={70}/>
                </Link>
            </div>
            <Nav/>
        </header>
    );
};

export default Header;