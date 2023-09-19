import Left from "@/components/shared/Container/Left"
import Right from "@/components/shared/Container/Right"
import { wework } from '@/constants/weworkData'

export const metadata = {
  title: 'How we work | Lodong',
  description: 'A Software Company that provide solutions, based in Gyeonggi-do, South Korea',
}


export default function Wework() {

  // console.log(wework)

  return (
    <>
      <main className="bg-white lg:bg-black pb-28">
        {/* <section className="content py-14 space-y-8">
          <p className="tracking-tighter space-x-2">
            <span className="text-3xl text-carmine font-bold">LODONG</span>
            <span className="text-2xl text-jungle font-medium opacity-60 lg:text-white lg:opacity-100">
              의 개발 프로세스
            </span>
          </p>
          <h1 className="text-jungle lg:text-white text-7xl font-extrabold tracking-tighter leading-none">
            How We Work
          </h1>
        </section> */}

        <div className="w-screen space-y-44">
          {/* <Right data={wework.w1} /> */}
          {/* <Left data={wework.w2} /> */}
          <Right data={wework.w3} />
          {/* <Left data={wework.w4} /> */}
          <Right data={wework.w5} />
          {/* <Left data={wework.w6} /> */}
          <Right data={wework.w7} />
          {/* <Left data={wework.w8} /> */}
        </div>

      </main>
    </>
  )
}