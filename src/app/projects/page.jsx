import ScrollTop from "@/components/shared/ScrollTop/ScrollTop"
import ProjectCard from "@/components/ui/ProjectCard"
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

            <ProjectCard data={projectsData.keflavik}
              bg={`bg-keflavik-light hover:bg-keflavik`}
              pos={`absolute bottom-[45%] left-[50%]`}
            />

            <ProjectCard data={projectsData.rugolf}
              bg={`bg-rugolf-light hover:bg-rugolf`}
              pos={`absolute bottom-[50%] left-[60%]`}
            />

            <ProjectCard data={projectsData.caremanager}
              bg={`bg-caremanager-light hover:bg-caremanager`}
              pos={`absolute bottom-[-5%] right-[-5%]`}
            />

            <ProjectCard data={projectsData.washcube}
              bg={`bg-washcube-light hover:bg-washcube`}
              pos={`absolute bottom-[60%] left-[36%]`}
            />

            <ProjectCard data={projectsData.aicity}
              bg={`bg-aicity-light hover:bg-aicity`}
              pos={`absolute bottom-[60%] right-[0]`}
            />

            <ProjectCard data={projectsData.winlottery}
              bg={`bg-winlottery-light hover:bg-winlottery`}
              pos={`absolute bottom-[50%] left-[55%]`}
            />

            <div className="hidden 3xl:block">
              <ProjectCard data={projectsData.dummy1}
                bg={`bg-proj hover:bg-opacity-80`}
                pos={``} />
            </div>

            <div className="hidden 3xl:block">
              <ProjectCard data={projectsData.dummy2}
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
