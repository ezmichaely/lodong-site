"use client"
import { CaretUpDark, ScrollToTop } from "@/assets/images"
import styles from './scrollTop.module.css'
import Image from 'next/image'
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin.js";

gsap.registerPlugin(ScrollToPlugin);

export default function ScrollTop() {
  const handleScroll = () => {
    gsap.to(window, {duration: 1.5, scrollTo: 0});
  };

  return (
    <>
      <button onClick={handleScroll}
        className={`${styles.scrollToTopMobile}`}>
        <Image src={CaretUpDark} alt="caret up" priority
          className={`${styles.scrollMobile}`}/>
      </button>

      <button onClick={handleScroll}
        className={`${styles.scrollToTopDesktop}`}>
        <Image src={ScrollToTop} alt="caret up" priority
          className={`${styles.scrollDesktop}`} />
      </button>
    </>
  )
}
