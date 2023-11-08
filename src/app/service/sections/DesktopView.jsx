import styles from './desktopView.module.css'
import { serviceData } from "@/constants/pages/serviceData"
import { ServiceCircle } from '@/components'

export default function DesktopView() {
  return (
    <section className={`servicePlot ${styles.section}`}>
      <div className={styles.sectionContent}>
        <div className={styles.top}>
          <div className={styles.topContent}>
            <div className={styles.topA}>
              <div className={styles.topCircle1}>
                <ServiceCircle data={serviceData[0]} />
                <div className={styles.topCircle1Mini}></div>
              </div>
              <div className={styles.topCircle2}>
                <ServiceCircle data={serviceData[1]} />
              </div>
            </div>
            <div className={`topB ${styles.topB}`}>
              <div className={styles.topCircle3}>
                <ServiceCircle data={serviceData[4]} />
              </div>
              <div className={`topB4 ${styles.topCircle4}`}>
                <ServiceCircle data={serviceData[3]} />
                <div className={styles.topCircle4Mini}></div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.bottomContent}>
            <div className={styles.bottomCircle}></div>
            <div className={styles.bottomDetails}>
              <h3>Services</h3>
              <h3>Lodong provides</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
