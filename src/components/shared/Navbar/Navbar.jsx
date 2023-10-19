"use client"

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link'

import styles from './navbar.module.css';
import { headerRoutes } from '@/routes/routes';
import { VscChromeClose } from 'react-icons/vsc';
import {
  MenuDark,
  MenuLight
} from '@/assets/images';

const Navbar = () => {
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


  return (
    <div className={styles.navDialog}>
      <button onClick={openDialog}>
        <Image src={MenuDark} alt="MenuDark" />
      </button>

      {isOpen && (
        <div className={styles.overlay}>
          <dialog className={`${styles.navbar}`}>

            <button onClick={closeDialog}
              className={`${styles.toggle}`} >
              <VscChromeClose className={styles.toggleIcon} />
            </button>

            <nav className={styles.inner}>
              {headerRoutes.map((d) => (
                <Link key={d.key} href={d.path} onClick={closeDialog}
                  className={styles.navLink}>
                  {/* className={` ${d.title === 'Contact' ? styles.navLinkBtn : styles.navLink} `}> */}
                  {d.title}
                </Link>

                // <Link key={d.key} href={d.path}
                //   className={` ${d.title === 'Contact' ? styles.navlinkbtn : styles.navlink} `}>
                //   {d.title}
                // </Link>
              ))}
            </nav>
          </dialog>
        </div>
      )}

    </div>
  )
}

export default Navbar
