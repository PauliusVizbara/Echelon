import Head from 'next/head'
import { Hero } from 'components/Hero'
import { Footer } from 'components/Footer'

export default function LandingPage() {

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero/>
        <Footer/>
      </main>

    </>
  )
}
