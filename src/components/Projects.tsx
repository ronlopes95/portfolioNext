import Image from 'next/image'
import project1 from '/public/project1.png'
import project2 from '/public/project2.png'
import project3 from '/public/project3.png'
import placeholder from '/public/placeholder.png'
import imagensProjeto from 'styles/imgProjeto.module.css'

const projectsList = [
  {
    name: 'Portfolio',
    link: 'https://github.com/ronlopes95/portfolioNext',
    image: project1,
    alt: 'Foto do projeto 1',
    techs: ['NextJS', 'TailwindCSS'],
  },
  {
    name: 'Calculadora',
    link: 'https://github.com/ronlopes95/calculadora-javascript',
    image: project2,
    alt: 'Foto do projeto 2',
    techs: ['HTML', 'CSS', 'Javascript'],
  },
  {
    name: 'Feedback Widget',
    link: 'https://github.com/ronlopes95/nlw-widget-feedback',
    image: project3,
    alt: 'Foto do projeto 3',
    techs: ['ReactJS', 'TailwindCSS', 'HeadlessUI'],
  },
]

export const Projects = () => (
  <section id="projetos" className="flex flex-col justify-center gap-20">
    <h2 className="self-center">Meus projetos!</h2>

    <div className="flex justify-between gap-5">
      {projectsList.map(({ name, link, image, alt, techs }) => (
        <div className="flex flex-col gap-6" key={name}>
          <h3 className="text-center">{name}</h3>
          <a href={link} target="_blank">
            <Image
              src={image}
              alt={alt}
              width="397"
              height="397"
              objectFit="cover"
              className="!border-6 rounded-[1.25rem] !border-solid !border-custom-white-100 !duration-500 !ease-in-out hover:!border-indigo-600"
            />
          </a>
          <div className="flex max-w-fit flex-wrap gap-3">
            {techs.map((tech) => (
              <p className="w-auto rounded-[1.25rem] border-2 border-custom-white-100 p-2 px-4">
                {tech}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
)
