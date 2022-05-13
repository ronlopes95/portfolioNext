import type { NextPage } from 'next'
import Head from 'next/head'

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
    </div>
  )
}

export default Home
