import Image from 'next/image'
import project1 from '/public/project1.png'
import project2 from '/public/project2.png'
import project3 from '/public/project3.png'
import placeholder from '/public/placeholder.png'
import imagensProjeto from 'styles/imgProjeto.module.css'

// const projectsList = ['Project1', 'Project2', 'Project3', 'Project 4']

export const Projects = () => (
  <section id="projetos">
    <div className="flex justify-center">
      <h2 className="pt-[7.5rem] pb-20">Meus projetos!</h2>
    </div>

    <div className="flex">
      <div className="pr-5">
        <h3 className="text-center">Portfolio</h3>
        <a href="https://github.com/ronlopes95/portfolioNext" target="_blank">
          <Image
            src={project1}
            alt="Foto do projeto 1"
            width="397"
            height="397"
            className="!border-6 rounded-[1.25rem] !border-solid !border-custom-white-100 !duration-500 !ease-in-out hover:!border-indigo-600"
          />
        </a>
        <div className="flex">
          <p className="mr-3 w-auto rounded-[1.25rem] border-2 border-custom-white-100 p-2 pl-4 pr-4">
            NextJS
          </p>
          <p className="mr-3 w-auto rounded-[1.25rem] border-2 border-custom-white-100 p-2 pl-4 pr-4">
            TailwindCSS
          </p>
        </div>
      </div>

      <div className="pr-5">
        <h3 className="text-center">Calculadora</h3>
        <a
          href="https://github.com/ronlopes95/calculadora-javascript"
          target="_blank"
        >
          <Image
            src={project2}
            alt="Foto do projeto 2"
            width="397"
            height="397"
            className="!border-6 rounded-[1.25rem] !border-solid !border-custom-white-100 !duration-500 !ease-in-out hover:!border-indigo-600"
            objectFit="cover"
          />
        </a>
        <div className="flex">
          <p className="mr-3 w-auto rounded-[1.25rem] border-2 border-custom-white-100 p-2 pl-4 pr-4">
            HTML
          </p>
          <p className="mr-3 w-auto rounded-[1.25rem] border-2 border-custom-white-100 p-2 pl-4 pr-4">
            CSS
          </p>
          <p className="mr-3 w-auto rounded-[1.25rem] border-2 border-custom-white-100 p-2 pl-4 pr-4">
            Javascript
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-center">Feedback Widget</h3>
        <a href="https://github.com/ronlopes95/to-do-list" target="_blank">
          <Image
            src={project3}
            alt="Foto do projeto 3"
            width="397"
            height="397"
            className="!border-6 rounded-[1.25rem] !border-solid !border-custom-white-100 !duration-500 !ease-in-out hover:!border-indigo-600"
            objectFit="cover"
          />
        </a>
        <div className="flex">
          <p className="mr-3 w-auto rounded-[1.25rem] border-2 border-custom-white-100 p-2 pl-4 pr-4">
            ReactJS
          </p>
          <p className="mr-3 w-auto rounded-[1.25rem] border-2 border-custom-white-100 p-2 pl-4 pr-4">
            TailwindCSS
          </p>
          <p className="mr-3 w-auto rounded-[1.25rem] border-2 border-custom-white-100 p-2 pl-4 pr-4">
            HeadlessUI
          </p>
        </div>
      </div>
    </div>
  </section>
)
