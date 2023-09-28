import styles from './wework.module.css'

import {
  LeftContainer,
  RightContainer,
  FirstContainer,
  ScrollTop
} from "@/components"

import {
  weworkContainer, weworkTitle
} from '@/constants/pages/weworkData'


export const metadata = {
  title: 'How we work | Lodong',
  description: 'A Software Company that provide solutions, based in Gyeonggi-do, South Korea',
}


export default function Wework() {
  return (
    <>
      <main className={`${styles.main}`}>
        <section className={`${styles.topSection}`}>
          <p className={`${styles.topP}`}>
            <span className={`${styles.topPName}`}>
              {weworkTitle.name}
            </span>
            <span className={`${styles.topPDetail}`}>
              {weworkTitle.detail}
            </span>
          </p>
          <h1 className={`${styles.topH1}`}>
            {weworkTitle.title}
          </h1>
        </section>

        <div className="w-screen">
          <FirstContainer data={weworkContainer.w1}
            extra={weworkTitle} />
          <LeftContainer data={weworkContainer.w2} />
          <RightContainer data={weworkContainer.w3} />
          <LeftContainer data={weworkContainer.w4} />
          <RightContainer data={weworkContainer.w5} />
          <LeftContainer data={weworkContainer.w6} />
          <RightContainer data={weworkContainer.w7} />
          <LeftContainer data={weworkContainer.w8} />
        </div>

        <ScrollTop />
      </main>


    </>
  )
}