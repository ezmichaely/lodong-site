import styles from './contactForm.module.css'


export default function ContactForm() {
  return (
    <section className={styles.contactForm}>
      <form action="">
        <input type="text" className='' placeholder='이름 (소속) 입력하기' />
        <input type="text" className='' placeholder='연락처 입력하기' />
        <div>

        </div>
      </form>
    </section>
  )
}
