import Image from "next/image"
import {
  caremanager06
} from '@/assets/images'
import styles from '../caremanager.module.css'

export default function Section06() {
  return (
    <section className={styles.sixSection}>
      <div className={styles.sixContainer}>
        <div className={styles.sixImage}>
          <Image src={caremanager06} alt="caremanager06"/>
        </div>

        <div className={styles.sixDetails}>
          <p>
            <span>배너, 상담, 회원정보를</span> <br className={styles.sixDetailsBr1} />
            <span className="lg:font-bold">관리자앱에서 </span> <br className={styles.sixDetailsBr2}/>
            <span>등록, 관리 가능</span>
            <span>합니다.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
