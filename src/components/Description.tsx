import Image from 'next/image'

export const Description = () => (
  <section id="sobre" className="flex flex-col gap-16 sm:gap-20">
    <h2 className="text-center">Um pouco sobre mim!</h2>

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
          Nascido e criado no Rio, fluente em Inglês e Carioquês. Viciado em
          tecnologia, video-games e comida gordurosa. Tenho um cachorro e uma
          gata que valem por dez. Fanboy de Warcraft até morrer. Já tive uma
          onda de crossfiteiro mas hoje só malho pra poder comer. Estou sempre à
          procura de novos desafios, sem nenhuma vergonha de admitir quando
          preciso de ajuda e ansioso para me juntar à uma equipe para fincar
          raízes em uma empresa, crescer profissionalmente e mudar a vida de
          muitas pessoas.
        </p>
        <br />
        <p>
          Desenvolvedor novato mas com garra, voltado primariamente para
          desenvolvimento de aplicativos web porém ativamente estudando e
          determinado a aprender diversas vertentes da área de programação!
        </p>
      </div>
    </div>
  </section>
)
