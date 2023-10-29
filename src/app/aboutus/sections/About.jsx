import styles from './about.module.css'
import Image from 'next/image'
import {
  auDesktop
} from '@/assets/images'

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.topDiv}>
        <div className={styles.topLeft}>
          <div className={styles.title}>
            <h2>About <br /> Us</h2>
            <p>
              <span>대표</span>
              <span>조이준</span>
            </p>
          </div>

          <div className={styles.details}>
            <div className={styles.content}>
              <div className={styles.contentTitle}>
                <h5> 실패 없는 개발, 소외 없는 사회. </h5>
                <h5> 어제 보다 나은 오늘, 오늘 보다 나은 세상. </h5>
                <h5> LODONG (로동)이 함께 걷습니다. </h5>
              </div>
              <div className={styles.contentDetails}>
                <p> 우리는 소프트웨어 개발에 대한 열정과 헌신으로 매 순간 최선을 다하며, 그로 인해 이루어지는 성취감과 보람을 느끼고 있습니다. </p>
                <p> 하지만 우리가 추구하는 것은 단순히 개발에 대한 성과만이 아닙니다. 로동은 누구도 소외되지 않는 공정하고 따뜻한 사회 를 만들기 위해 노력합니다. </p>
                <p> 이를 위해 우리는 소외된 이웃들과 함께 상생하며 약자를 보호하는, 더 따듯하고 인간적인 회사 를 지향합니다. </p>
                <p> 로동이라는 이름에서는 더 따듯한 온정이 느껴지며, 우리는 이 온정을 기반으로 끊임없이 발전하고 성장하기 위해 노력합니다. </p>
                <p> 저희는 실패를 두려워하지 않으며, 성장과 발전의 과정에서도 누구도 소외되지 않는 사회를 만들어가는 것이 우리의 궁극적인 목표입니다.  </p>
                <p> 우리 로동은 개발 회사로서 열정과 노력 으로 더 나은 세상 을 만들어갈 것입니다. 함께 걷는 이 길에서, 로동은 당신의 곁에 있습니다. </p>
              </div>
            </div>
          </div>

          <div className={styles.footnote}>
            <p>
              <span>대표</span>
              <span>조이준</span>
            </p>
          </div>
        </div>
        <div className={styles.topRight}>
          <Image src={auDesktop} alt="auDesktop" />
        </div>
      </div>


      <div className={styles.botDiv}>
        <div className={styles.content}>
          <div className={styles.contentTitle}>
            <h5> 실패 없는 개발, 소외 없는 사회. </h5>
            <h5> 어제 보다 나은 오늘, 오늘 보다 나은 세상. </h5>
            <h5> LODONG (로동)이 함께 걷습니다. </h5>
          </div>
          <div className={styles.contentDetails}>
            <p> 우리는 소프트웨어 개발에 대한 열정과 헌신으로 매 순간 최선을 다하며, 그로 인해 이루어지는 성취감과 보람을 느끼고 있습니다. </p>
            <p> 하지만 우리가 추구하는 것은 단순히 개발에 대한 성과만이 아닙니다. 로동은 누구도 소외되지 않는 공정하고 따뜻한 사회 를 만들기 위해 노력합니다. </p>
            <p> 이를 위해 우리는 소외된 이웃들과 함께 상생하며 약자를 보호하는, 더 따듯하고 인간적인 회사 를 지향합니다. </p>
            <p> 로동이라는 이름에서는 더 따듯한 온정이 느껴지며, 우리는 이 온정을 기반으로 끊임없이 발전하고 성장하기 위해 노력합니다. </p>
            <p> 저희는 실패를 두려워하지 않으며, 성장과 발전의 과정에서도 누구도 소외되지 않는 사회를 만들어가는 것이 우리의 궁극적인 목표입니다.  </p>
            <p> 우리 로동은 개발 회사로서 열정과 노력 으로 더 나은 세상 을 만들어갈 것입니다. 함께 걷는 이 길에서, 로동은 당신의 곁에 있습니다. </p>
          </div>
        </div>
      </div>
    </section>
  )
}
