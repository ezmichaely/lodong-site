"use client"

import Image from 'next/image';
import Link from 'next/link'

import { useState } from 'react';

import styles from '@/components/shared/Header/header.module.css';
import Navbar from '@/components/shared/Navbar/Navbar';

import { lodongIcon, menu } from '@/assets/images';
import { headerRoutes } from '@/lib/routes/headerRoutes';


const Header = () => {
  const [isToggled, setIsToggled] = useState(false);
  const handleToggle = () => {
    setIsToggled(true);
  };


  return (
    <>
      <header className={styles._header}>
        <nav className={styles._inner}>
          <Link href="/" className={styles._brand}>
            <Image src={lodongIcon} alt="lodong logo" 
              className={styles._brand_img} />
            <p className={styles._brand_text}>LODONG</p>
          </Link>

          <div onClick={handleToggle}  className={`${styles._toggle} ${isToggled ? styles._toggleActive : ''} `} >
            <Image src={menu} alt="menu bar"
              className={styles._toggle_img} />
          </div>

          <div className={styles._nav}>
            {headerRoutes.map((d) => (
              <Link key={d.key} href={d.path} 
                className={`${d.title === 'Contact' ? styles._nav_link_btn : styles._nav_link} `}>
                {d.title}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      {isToggled ? <Navbar /> : ''}
      
    </>
  )
}

export default Header
