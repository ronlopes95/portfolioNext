import Image from 'next/image'

export const Description = () => (
  <section id="sobre">
    <div className="flex w-full justify-center">
      <h2 className="pt-[7.5rem]">Um pouco sobre mim!</h2>
    </div>

    <div className="flex justify-between gap-[5rem]">
      <Image
        src="/photo2.svg"
        alt="Ilustração de um menino mexendo no computador com vários monitores"
        width="512"
        height="512"
      />

      <div className="max-w-[38rem] flex-1 items-center justify-between pt-[7.563rem]">
        <p>
          Desenvolvedor novato mas com garra, voltado primariamente para
          desenvolvimento de aplicativos web porém ativamente estudando e
          determinado a aprender diversas vertentes da área de programação!
        </p>
        <br />
        <p>
          Nascido e criado no Rio, RJ. Viciado em tecnologia e à procura de
          novos desafios, sem nenhuma vergonha de admitir quando preciso de
          ajuda e ansioso para me juntar à uma equipe para fincar raízes em uma
          empresa, crescer profissionalmente e mudar a vida de muitas pessoas.
        </p>
      </div>
    </div>
  </section>
)
