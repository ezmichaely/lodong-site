import { Hero, ContactForm } from './section'
import styles from './contact.module.css'

export const metadata = {
  title: 'Contact Us | Lodong',
  description: 'A Software Company that provide solutions, based in Gyeonggi-do, South Korea',
}


function Contact() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <Hero />
        <ContactForm />
      </section>
    </main>
  )
}

export default Contact
