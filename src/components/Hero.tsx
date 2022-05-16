import Image from 'next/image'

export const Hero = () => (
  <header className="mt-20 flex items-center justify-between">
    <div className="max-w-[38rem] flex-1">
      <h2 className="mb-6">RONALDO LOPES</h2>
      <h1 className="mb-4">DESENVOLVEDOR FRONTEND</h1>
      <p className="mb-12">
        I implement user interface design and solve user problems with HTML, CSS
        AND Javascript. I have 2 years of making products that solve user
        problems and implementing responsive website.
      </p>
      <div className="flex gap-5">
        <a
          href="https://drive.google.com/file/d/1nTCEprz_AaxIgPOEpiPvawkRsQrrhnTv/view?usp=sharing"
          target="_blank"
          className="defaultTexttext-xl rounded-[1.25rem] bg-custom-white-50 py-3 px-8 text-custom-black-50 duration-500 ease-in-out hover:scale-110 hover:bg-indigo-600 hover:text-custom-white-100"
        >
          Curriculo
        </a>
      </div>
    </div>
    <div className="grid flex-1 place-content-center">
      <Image
        src="/photo.png"
        alt="Foto do autor do site"
        width="512"
        height="512"
      />
    </div>
  </header>
)
