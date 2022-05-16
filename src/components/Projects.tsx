import Image from 'next/image'
import project1 from '/public/project1.png'

const projectsList = ['Project1', 'Project2', 'Project3', 'Project 4']

export const Projects = () => (
  <section id="projetos">
    <div className="flex justify-center">
      <h2 className="pt-[7.5rem] pb-20">Projetos</h2>
    </div>

    <span className="border-6 rounded-['1.25rem'] border-solid border-custom-white-100">
      <Image
        className="border-6 border-custom-white-100y rounded-['1.25rem'] border-solid"
        src={project1}
        alt="Foto do projeto 1"
        width="397"
        height="397"
      />
    </span>
  </section>
)
