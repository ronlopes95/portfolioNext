import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'

import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { Description } from '../components/Description'
import { Projects } from '../components/Projects'
import { Contato } from '../components/Contato'
import { Footer } from '../components/Footer'
import { Lang } from '../components/Lang'

const Home: NextPage = () => {
  const [selected, setSelected] = useState<'enUs' | 'ptBr'>('enUs')
  return (
    <>
      <Head>
        <title>Portfólio - Ron Lopes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="m-auto flex max-w-[77.5rem] flex-col gap-24 p-6 sm:gap-[7.5rem] sm:py-20">
        <Lang selected={selected} setSelected={setSelected} />
        <Navbar />
        <Hero selectedLang={selected} />
        <Description />
        <Projects />
        <Contato />
        <Footer />
      </div>
    </>
  )
}

export default Home
