import styles from './contactForm.module.css'


export default function ContactForm() {
  return (
    <article className={styles.contactForm}>
      <div className={`${styles.form}`}>
        <div className={styles.formControl}>
          <input type="text" placeholder='이름 (소속) 입력하기' className={`form-input ${styles.inputText}`} />
        </div>

        <div className={styles.formControl}>
          <input type="text" placeholder='연락처 입력하기' className={`form-input ${styles.inputText}`} />
        </div>

        <div className={styles.formCheck}>
          <label htmlFor="iAgree">
            <input id="iAgree" type="checkbox" className={`form-checkbox ${styles.checkBox}`} />
            <span> 개인정보 수집 및 이용에 동의합니다. </span>
          </label>
        </div>

        <div className={styles.formButton}>
          <button>
            상담 예약
          </button>
        </div>
      </div>

      <div className={`${styles.messageForm}`}>

      </div>
    </article>
  )
}
