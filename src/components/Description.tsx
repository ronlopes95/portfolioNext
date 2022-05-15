import Image from 'next/image'

export const Description = () => (
  <div>
    <div className="flex w-full content-center justify-center">
      <h2 className="pt-[7.5rem]">Um pouco sobre mim!</h2>
    </div>

    <div className="flex justify-between gap-[5rem]">
      <Image
        src="/photo2.svg"
        alt="Ilustração de um menino mexendo no computador com vários monitores"
        width="512"
        height="512"
      />

      <p className="max-w-[38rem] flex-1 items-center justify-between pt-[7.563rem]">
        I implement user interface design and solve user problems with HTML, CSS
        AND Javascript. I have 2 years of making products that solve user
        problems and implementing responsive website. I implement user interface
        design and solve user problems with HTML, CSS AND Javascript. I have 2
        years of making products that solve user problems and implementing
        responsive website.I implement user interface design and solve user
        problems with HTML, CSS AND Javascript. I have 2 years of making
        products that solve user problems and implementing responsive website.
        Contact me
      </p>
    </div>
  </div>
)
