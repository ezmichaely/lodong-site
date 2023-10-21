"use client"

import Image from 'next/image';
import Link from 'next/link'
import { useState, useEffect } from 'react';
import styles from './header.module.css';
import { Navbar } from '@/components';
import { LodongLogo } from '@/assets/images';
import { headerRoutes } from '@/routes/routes';
import { usePathname } from 'next/navigation';
import { useMediaQuery } from '@/utils/mediaQuery'
import { getHeaderBg } from '@/utils/getHeaderBg'

export default function Header () {
  const path = usePathname();
  const mediaQuery = useMediaQuery(1024);
  const headerBg = getHeaderBg(path, mediaQuery);
  const [headerChange, setHeaderChange] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsVisible(prevScrollPos > currentScrollPos);
      if (prevScrollPos > currentScrollPos) { setIsVisible(true); }
      else { setIsVisible(false);}
      prevScrollPos = currentScrollPos;

      if (window.scrollY >= 100) { setHeaderChange(true); }
      else { setHeaderChange(false); }
    };
    let prevScrollPos = window.pageYOffset;
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const defaultHeaderClass = `${styles.header} ${headerBg} opacity-100`;
  const newHeaderClass = `${styles.header}
    ${isVisible
      ? (headerBg === 'bg-transparent'
        ? 'bg-white opacity-100'
        : `${headerBg} opacity-100`)
      : 'opacity-0'}`;

  return (
    <>
      <header className={headerChange ? newHeaderClass : defaultHeaderClass}>
        <div className={styles.container}>
          <Link href="/" className={styles.brand}>
            <Image src={LodongLogo} alt="LodongLogo" className={styles.brandImg} />
            <p className={styles.brandText}>LODONG</p>
          </Link>

          <nav className={styles.nav}>
            {headerRoutes.map((d) => (
              <Link key={d.key} href={d.path} onClick={() => setHeaderChange(false)}
                className={`${headerBg === 'bg-black'
                  ? path === d.path ? styles.navLinkActive + ' text-white' : styles.navLink + ' text-white'
                  : path === d.path ? styles.navLinkActive + ' text-black' : styles.navLink + ' text-black' }`} >
                {d.title}
              </Link>
            ))}
            <Link href="/contact"
              className={`${headerBg === 'bg-black'
                ? path === '/contact' ? styles.navLinkBtnLightActive : styles.navLinkBtnLight
                : path === '/contact' ? styles.navLinkBtnDarkActive : styles.navLinkBtnDark}`} >
              Contact
            </Link>
          </nav>

          {!mediaQuery && (<Navbar />)}
        </div>
      </header>
    </>
  )
}