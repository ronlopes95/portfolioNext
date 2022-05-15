import instagram from '/public/instagram.svg'
import whatsappIcon from '/public/whatsapp.svg'
import Image from 'next/image'

export const Contato = () => (
  <>
    <div className="w-full text-center">
      <h3 className="pt-[7.5rem]">
        Está procurando um desenvolvedor para ajudar em seu projeto?
      </h3>
      <h2 className="pt-8">Fale comigo</h2>
      <h1 className="pt-8">ronaldofslopes@gmail.com</h1>
    </div>
    <div>
      <img src={whatsappIcon} alt="teste" title="icone do whatsapp" />
    </div>
  </>
)
