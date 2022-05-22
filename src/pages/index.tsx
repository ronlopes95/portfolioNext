import type { NextPage } from 'next'
import Head from 'next/head'

import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { Description } from '../components/Description'
import { Projects } from '../components/Projects'
import { Contato } from '../components/Contato'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Portfólio - Ron Lopes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="m-auto flex max-w-[77.5rem] flex-col gap-24 p-6 sm:gap-[7.5rem] sm:py-20">
        <Navbar />
        <Hero />
        <Description />
        <Projects />
        <Contato />
      </div>
    </>
  )
}

export default Home
