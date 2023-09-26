"use client"

import { useState } from 'react';

import Link from 'next/link';
import styles from './navbar.module.css';
// import { headerRoutes } from '@/lib/routes/headerRoutes';
import { VscChromeClose } from 'react-icons/vsc';

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);
  const handleToggle = () => {
    setIsToggled(true);
  };



  return (
    <nav className={`${styles._navbar} ${isToggled ? 'hidden' : ''}`}>
      <div className={styles._inner}>
        {headerRoutes.map((d) => (
          <Link key={d.key} href={d.path}
            className={` ${d.title === 'Contact' ? styles._nav_link_btn : styles._nav_link} `}>
            {d.title}
          </Link>
        ))}

        <div onClick={handleToggle} className={styles._toggle} >
          <VscChromeClose className={styles._toggle_icon} />
        </div>

      </div>
    </nav>
  )
}

export default Navbar
