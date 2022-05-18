import type { NextPage } from 'next'
import Head from 'next/head'

import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { Description } from '../components/Description'
import { Projects } from '../components/Projects'
import { Contato } from '../components/Contato'

const Home: NextPage = () => {
  return (
    <div className="m-auto max-w-[77.5rem] pt-20">
      <Head>
        <title>Portfólio - Ron Lopes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <Description />
      <Projects />
      <Contato />
    </div>
  )
}

export default Home
