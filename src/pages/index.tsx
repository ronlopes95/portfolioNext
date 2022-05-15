import type { NextPage } from 'next'
import Head from 'next/head'
import { Description } from '../components/Description'

import { Hero } from '../components/Hero'
import { Navbar } from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <div className="m-auto max-w-[77.5rem] pt-20">
      <Head>
        <title>Portfólio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <Description />
    </div>
  )
}

export default Home
