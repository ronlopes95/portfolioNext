import Image from 'next/image'

export const Hero = ({ selectedLang }: { selectedLang: 'enUs' | 'ptBr' }) => (
  <section className="flex flex-col items-center justify-between sm:flex-row">
    {/* {selectedLang === 'enUS' ? (
      <p className="tailwindcsss here">english content</p>
    ) : (
      <p className="tailwindcsss here">conteúdo português</p>
    )}
    ) */}
    <div className="max-w-[38rem] flex-1">
      <h2 className="mb-6">RON LOPES</h2>
      <h1 className="mb-4">FRONT END DEVELOPER</h1>
      <p>
        Hey there! I create and implement interfaces as a front end developer. I
        have approximately 1 year of experience creating apps and responsive
        websites.
      </p>
      <p>
        I mainly develop through ReactJS and NextJS. I am also pproficient in
        other libraries, frameworks and tools, such as: Typescript, SASS,
        TailwindCSS, StyledComponents, Vite, GIT, NodeJS, Express, noSQL plus
        notions of Agile Cultures, teamwork, code versioning to name a few of my
        skills!
      </p>
      <br />
      <p className="mb-12">Take a look at my resume, no download required! </p>
      <div className="flex justify-center gap-5 sm:justify-start">
        <a
          href="https://docs.google.com/document/d/164jVvuxpJYVDIk6U6tl-fUaI0-dxFVcPgwAH2bRfGMk/edit?usp=sharing"
          target="_blank"
          className="defaultText rounded-[1.25rem] bg-custom-white-50 py-3 px-8 font-inter text-xl text-custom-black-50 duration-500 ease-in-out hover:scale-110 hover:bg-indigo-600 hover:text-custom-white-100"
        >
          Resume
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
