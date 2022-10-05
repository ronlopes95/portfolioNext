import Image from 'next/image'

export const Description = () => (
  <section id="sobre" className="flex flex-col gap-16 sm:gap-20">
    <h2 className="text-center">A little about me!</h2>

    <div className="flex flex-col justify-between gap-5 md:flex-row">
      <div>
        <div className="hidden flex-1 sm:block">
          <Image
            src="/photo2.svg"
            alt="Ilustração de um menino mexendo no computador com vários monitores"
            width="512"
            height="512"
          />
        </div>
        <div className="block flex-1 sm:hidden">
          <Image
            src="/photo.png"
            alt="Foto do autor do site"
            width="512"
            height="512"
          />
        </div>
      </div>

      <div className="flex-1">
        <p>
          Born and raised in Rio, Brazil. Fluent in both English and Portuguese,
          with a strong understanding of Spanish as well! I'm extremely into
          technology, video games and D&amp;D.
        </p>
        <br />
        <p>
          I have a dog and a cat that are worth ten whole pets. Warcraft fanboy
          till my last breath. Oh and I once had a crossfit phase, but nowadays
          I only work out so I can eat more!
        </p>
        <br />
        <p>
          I'm always looking for new challenges, not shy to ask for help at all
          and looking forward to joining a team to put down roots with, grow
          professionally and change the life of many people!
        </p>
      </div>
    </div>
  </section>
)
