import Image from 'next/image'

export const Hero = () => (
  <header className="mt-20 flex items-center justify-between">
    <div className="max-w-[38rem] flex-1">
      <h2 className="mb-6">RONALDO LOPES</h2>
      <h1 className="mb-4">FRONTEND DEVELOPER</h1>
      <p className="mb-12">
        I implement user interface design and solve user problems with HTML, CSS
        AND Javascript. I have 2 years of making products that solve user
        problems and implementing responsive website.
      </p>
      <a
        href=""
        className="defaultTexttext-xl rounded-[1.25rem] bg-custom-white-50 py-3 px-8 text-custom-black-50"
      >
        Contact me
      </a>
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
