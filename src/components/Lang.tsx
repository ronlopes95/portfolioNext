// (EN | PT)
import Image from 'next/image'
import brazilianFlag from '/public/Brazilian_flag.png'
import usukFlag from '/public/US-UK_Flag.png'

type langProps = {
  selected: 'enUs' | 'ptBr'
  setSelected: (selected: 'enUs' | 'ptBr') => void
}

export const Lang = ({ selected, setSelected }: langProps) => (
  <div className="flex">
    <button
      className="flex pr-2"
      data-selected={selected === 'enUs'}
      onClick={() => setSelected('enUs')}
    >
      <Image
        className="rounded-md"
        src={usukFlag}
        alt="USA and UK flag"
        width="55"
        height="33"
      ></Image>
    </button>
    <button
      className="flex"
      data-selected={selected === 'ptBr'}
      onClick={() => setSelected('ptBr')}
    >
      <Image
        className="rounded-md"
        src={brazilianFlag}
        alt="Brazilian flag"
        width="55"
        height="34"
      ></Image>
    </button>
  </div>
)
