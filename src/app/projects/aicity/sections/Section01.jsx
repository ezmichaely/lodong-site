

import styles from '../aicity.module.css'

export default function Section01() {
  return (
    <section className={styles.oneSection}>
      <div className={styles.oneContainer}>
        <div className={styles.oneDetails}>
          <h3>AI도시를 부탁해!</h3>
          <div>
            <p>
              AI를 도입함으로써 일어나는 다양한 상황들을 제시하고 그에대해 찬성과 반대로 갈리는 설문조사입니다.
            </p>
            <p>
              설문자가 AI에 대해 어떤 관점을 가지고 있는지 통계를 가져올 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>

  )
}
