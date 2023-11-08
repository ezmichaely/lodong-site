import styles from './service.module.css'
import {
  MobileView, DesktopView
} from './sections'


export const metadata = {
  title: 'Services | Lodong',
  description: 'A Software Company that provide solutions, based in Gyeonggi-do, South Korea',
}


function Service() {
  return (
    <main className={`${styles.main}`}>
      <section className={`${styles.title}`}>
        <h2> Service </h2>
      </section>
      <MobileView />
      <DesktopView />
    </main>
  )
}

export default Service
