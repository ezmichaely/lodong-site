"use client"
import {
  CaretUpDark,
  CaretUpLight,
  ScrollToTop
} from "@/assets/images"
import {
  lightPaths,
  darkPaths,
  allPaths
} from '@/constants/paths'
import styles from './scrollTop.module.css'
import Image from 'next/image'
import { usePathname } from 'next/navigation';
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin.js";

gsap.registerPlugin(ScrollToPlugin);

export default function ScrollTop() {
  const handleScroll = () => {
    gsap.to(window, { duration: 1.5, scrollTo: 0 });
  };

  const pathname = usePathname();

  return (
    <>

      {darkPaths.includes(pathname) && (
        <div className={`${styles.scrollToTopMobile}`}>
          <button onClick={handleScroll}>
            <Image src={CaretUpDark} alt="caret up" priority
              className={`${styles.scrollMobile}`} />
          </button>
        </div>
      )}

      {allPaths.includes(pathname) && (
        <div className={`${styles.scrollToTopDesktop}`}>
          <button onClick={handleScroll} >
            <Image src={ScrollToTop} alt="caret up"
              priority
              className={`${styles.scrollDesktop}`} />
          </button>
        </div>
      )}

      {/* projects/ */}
      {lightPaths.includes(pathname) && (
        <div className={`${styles.scrollToTopMobile}`}>
          <button onClick={handleScroll}>
            <Image src={CaretUpLight} alt="caret up" priority
              className={`${styles.scrollMobile}`} />
          </button>
        </div>
      )}
    </>
  )
}
