import ScrollTop from "@/components/shared/ScrollTop/ScrollTop"
import Card from "@/components/ui/Card"
import { projectsData } from "@/constants/projectsData"


import styles from './projects.module.css'

export const metadata = {
  title: 'Projects | Lodong',
  description: 'A Software Company that provide solutions, based in Gyeonggi-do, South Korea',
}


export default function Projects() {

  return (
    <>
      <main className={`${styles.main}`}>
        <div className={`${styles.content}`}>
          <div className={`${styles.cardContainer}`}>

            <Card data={projectsData.keflavik}
              bg={`bg-proj-keflavik-light hover:bg-proj-keflavik`}
              pos={`absolute bottom-[45%] left-[50%]`}
            />

            <Card data={projectsData.rugolf}
              bg={`bg-proj-rugolf-light hover:bg-proj-rugolf`}
              pos={`absolute bottom-[50%] left-[60%]`}
            />

            <Card data={projectsData.caremanager}
              bg={`bg-proj-caremanager-light hover:bg-proj-caremanager`}
              pos={`absolute bottom-[-5%] right-[-5%]`}
            />

            <Card data={projectsData.washcube}
              bg={`bg-proj-washcube-light hover:bg-proj-washcube`}
              pos={`absolute bottom-[60%] left-[36%]`}
            />

            <Card data={projectsData.aicity}
              bg={`bg-proj-aicity-light hover:bg-proj-aicity`}
              pos={`absolute bottom-[60%] right-[0]`}
            />

            <Card data={projectsData.winlottery}
              bg={`bg-proj-winlottery-light hover:bg-proj-winlottery`}
              pos={`absolute bottom-[50%] left-[55%]`}
            />

            <div className="hidden 3xl:block">
              <Card data={projectsData.dummy1}
                bg={`bg-proj hover:bg-opacity-80`}
                pos={``} />
            </div>

            <div className="hidden 3xl:block">
              <Card data={projectsData.dummy2}
                bg={`bg-proj hover:bg-opacity-80`}
                pos={``} />
            </div>
          </div>
        </div>

        <ScrollTop />
      </main>


    </>
  )
}
