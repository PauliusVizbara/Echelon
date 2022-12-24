import Head from 'next/head'

import { Footer } from 'components/Footer'
import { Hero } from 'components/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>Echelon</title>
        <meta name="description" content="Echelon Group Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <Footer />
      </main>
    </>
  )
}
