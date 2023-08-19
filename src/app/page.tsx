import Image from 'next/image'
import { motion } from "framer-motion"
import styles from '@/app/home.module.css';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      HOME

      <p className={styles.test}>
        세상에 없던 디지털 솔루션 개발 전문

      </p>

      <br />
      <p className={styles.title}>실패 경험</p>


      <p className=''></p>
    </main>
  )
}
