import { Hero, ContactForm } from './section'

export const metadata = {
  title: 'Contact Us | Lodong',
  description: 'A Software Company that provide solutions, based in Gyeonggi-do, South Korea',
}


function Contact() {
  return (
    <main>
      <Hero />
      <ContactForm />
    </main>
  )
}

export default Contact
