"use client"

import Image from 'next/image';
import Link from 'next/link'

import { useState, useEffect } from 'react';

import styles from './header.module.css';
import { Navbar } from '@/components';

import {
  LodongLogo,
} from '@/assets/images';

import { headerRoutes } from '@/routes/routes';
import { usePathname } from 'next/navigation';
import { useMediaQuery } from '@/utils/mediaQuery'
import { getHeaderBg } from '@/utils/getHeaderBg'

export default function Header () {
  const path = usePathname();
  const mediaQuery = useMediaQuery('(max-width: 1024px)');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (mediaQuery) {
      let prevScrollPos = window.pageYOffset;
      const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        setIsVisible(prevScrollPos > currentScrollPos);
        if (prevScrollPos > currentScrollPos) { setIsVisible(true); }
        else { setIsVisible(false); }
        prevScrollPos = currentScrollPos;
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <>
      <header className={`${styles.header}
                          ${getHeaderBg(path, mediaQuery)}
                          ${isVisible
                            ? getHeaderBg(path, mediaQuery) === 'bg-transparent'
                                ? 'bg-white opacity-100'
                                : getHeaderBg(path, mediaQuery) + ' opacity-100'
                            : 'opacity-0'}
                          `}>
        <div className={styles.container}>
          <Link href="/" className={styles.brand}>
            <Image src={LodongLogo} alt="LodongLogo"
              className={styles.brandImg} />
            <p className={styles.brandText}>LODONG</p>
          </Link>

          <nav className={styles.nav}>
            {headerRoutes.map((d) => (
              <Link key={d.key} href={d.path}
                className={`${getHeaderBg(path, mediaQuery) === 'bg-black'
                  ? path === d.path ? styles.navLinkActive + ' text-white' : styles.navLink + ' text-white'
                  : path === d.path ? styles.navLinkActive + ' text-black' : styles.navLink + ' text-black' }`} >
                {d.title}
              </Link>
            ))}
            <Link href="/contact"
              className={`${getHeaderBg(path, mediaQuery) === 'bg-black'
                ? path === '/contact' ? styles.navLinkBtnLightActive : styles.navLinkBtnLight
                : path === '/contact' ? styles.navLinkBtnDarkActive : styles.navLinkBtnDark}`} >
              Contact
            </Link>
          </nav>

          {mediaQuery && (
            <Navbar />
          )}
        </div>
      </header>
    </>
  )
}