import Image from 'next/image'

export const Hero = () => (
  <section className="flex flex-col items-center justify-between sm:flex-row">
    <div className="max-w-[38rem] flex-1">
      <h2 className="mb-6">RONALDO LOPES</h2>
      <h1 className="mb-4">DESENVOLVEDOR FRONTEND</h1>
      <p>
        Oi! Eu implemento designs de interface de usuário e resolvo problemas
        com{' '}
        <span className="duration-500 ease-in-out hover:text-indigo-600">
          HTML, CSS e Javascript.
        </span>{' '}
        Tenho aproximadamente 3 meses de experiência criando aplicativos e
        implementando sites responsivos. Atualmente me julgo competente em{' '}
        <span className="duration-500 ease-in-out hover:text-indigo-600">
          ReactJS e NextJS.
        </span>{' '}
        Tenho também proficiência em outros ecosistemas e/ou ferramentas, tais
        como:{' '}
        <span className="duration-500 ease-in-out hover:text-indigo-600">
          Typescript, SASS, TailwindCSS, StyledComponents, GIT e Culturas Ágeis,
        </span>{' '}
        para mencionar algumas!
      </p>
      <br />
      <p className="mb-12">
        Dê uma olhadinha no meu currículo abaixo, não precisa baixar!
      </p>
      <div className="flex justify-center gap-5 sm:justify-start">
        <a
          href="https://drive.google.com/file/d/1nTCEprz_AaxIgPOEpiPvawkRsQrrhnTv/view?usp=sharing"
          target="_blank"
          className="defaultText rounded-[1.25rem] bg-custom-white-50 py-3 px-8 font-inter text-xl text-custom-black-50 duration-500 ease-in-out hover:scale-110 hover:bg-indigo-600 hover:text-custom-white-100"
        >
          Currículo
        </a>
      </div>
    </div>
    <div className="hidden flex-1 place-content-center sm:grid">
      <Image
        src="/photo.png"
        alt="Foto do autor do site"
        width="512"
        height="512"
      />
    </div>
  </section>
)
