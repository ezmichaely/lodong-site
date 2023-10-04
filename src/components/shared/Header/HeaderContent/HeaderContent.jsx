"use client"

import Image from 'next/image';
import Link from 'next/link'

import { useState } from 'react';

import styles from '@/components/shared/Header/header.module.css';
import Navbar from '@/components/shared/Navbar/Navbar';

import { lodongIcon, menu } from '@/assets/images';
import { headerRoutes } from '@/lib/routes/headerRoutes';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"



export default function Header () {

  return (
    <>
      <header className={styles._header}>
        <nav className={styles._inner}>
          <Link href="/" className={styles._brand}>
            <Image src={lodongIcon} alt="lodong logo"
              className={styles._brand_img} />
            <p className={styles._brand_text}>LODONG</p>
          </Link>


          <Dialog>
            <DialogTrigger className={styles._toggle}>
              <Image src={menu} alt="menu bar"
                className={styles._toggle_img} />
            </DialogTrigger>

            <DialogContent className={styles._navbar}>
              <DialogHeader className={styles._navbar_inner}>
                <DialogTitle>Are you sure absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete your account
                  and remove your data from our servers.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>



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

    </>
  )
}


