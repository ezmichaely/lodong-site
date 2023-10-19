import CircleCard from "@/components/ui/CircleCard"
import styles from './service.module.css'
import { serviceData } from "@/constants/pages/serviceData"

export const metadata = {
  title: 'Services | Lodong',
  description: 'A Software Company that provide solutions, based in Gyeonggi-do, South Korea',
}


function Service() {
  return (
    <main className={`${styles.main}`}>
      <h1 className={`${styles.pageTitle}`}> Service </h1>
      <section className={`${styles.section}`}>
        <div className={`${styles.circleContainer}`}>
          <CircleCard data={serviceData.app} />
          <CircleCard data={serviceData.web} />
          <CircleCard data={serviceData.ai} />
          <CircleCard data={serviceData.platform} />
          <CircleCard data={serviceData.software} />
          <CircleCard data={serviceData.etc} />
        </div>
      </section>

      <div className={`${styles.dotsContainer}`}>
        <div id="dotApp" onc
          className={`${styles.dots}`}></div>
        <div id="dotWeb" className={`${styles.dots}`}></div>
        <div id="dotAI" className={`${styles.dots}`}></div>
        <div id="dotPlatform" className={`${styles.dots}`}></div>
        <div id="dotSoftware" className={`${styles.dots}`}></div>
        <div id="dotETC" className={`${styles.dots}`}></div>
      </div>
    </main>
  )
}

export default Service
