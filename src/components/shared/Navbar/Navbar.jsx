"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link'
import styles from './navbar.module.css';
import { usePathname } from 'next/navigation';
import { headerRoutes } from '@/routes/routes';
import { getHeaderBg } from '@/utils/getHeaderBg'
import { useMediaQuery } from '@/utils/mediaQuery'
import { FaTimes } from 'react-icons/fa';
import { MenuDark, MenuLight } from '@/assets/images';

const Navbar = () => {
  const path = usePathname();
  const mediaQuery = useMediaQuery(1024);
  const headerBg = getHeaderBg(path, mediaQuery);
  const [isOpen, setIsOpen] = useState(false);
  const openDialog = () => {
    setIsOpen(true)
    document.body.classList.add('max-h-screen')
    document.body.classList.add('overflow-y-hidden')
  };
  const closeDialog = () => {
    setIsOpen(false);
    document.body.classList.remove('max-h-screen')
    document.body.classList.remove('overflow-y-hidden')
  };

  useEffect(() => {
    if (isOpen && mediaQuery) {
      setIsOpen(false);
      document.body.classList.remove('max-h-screen')
      document.body.classList.remove('overflow-y-hidden')
    }
  }, [mediaQuery]);

  return (
    <div className={styles.navDialog}>

      {headerBg === 'bg-black'
        ? (<button onClick={openDialog} className={`${styles.navOpen} hover:border-white`}>
              <Image src={MenuLight} alt="MenuLight" />
            </button>)
        : ( <button onClick={openDialog} className={`${styles.navOpen} hover:border-black`}>
              <Image src={MenuDark} alt="MenuDark" />
            </button>)
      }

      {isOpen && (
        <div className={styles.overlay}>
          <dialog className={`${styles.inner}`}>

            <div className={styles.toggleDiv}>
              <button onClick={closeDialog}
                className={`${styles.toggleBtn}`} >
                <FaTimes className={styles.toggleIcon} />
              </button>
            </div>

            <nav className={styles.navbar}>
              {headerRoutes.map((d) => (
                <Link key={d.key} href={d.path} onClick={closeDialog}
                   className={`${path === d.path ? styles.navLinkActive : styles.navLink}`}>
                  {d.title}
                </Link>
              ))}
              <Link href="/contact" onClick={closeDialog}
                className={`${path === '/contact' ? styles.navLinkBtnActive : styles.navLinkBtn}`} >
                Contact
              </Link>
            </nav>
          </dialog>
        </div>
      )}

    </div>
  )
}

export default Navbar