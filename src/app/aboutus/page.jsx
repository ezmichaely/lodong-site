import { About, Organization, Partners} from './sections'

export const metadata = {
  title: 'About us | Lodong',
  description: 'A Software Company that provide solutions, based in Gyeonggi-do, South Korea',
}

export default function AboutUs() {
  return (
    <>
      <main className='bg-black'>


        <Partners />
      </main>
    </>
  )
}
