import { useState } from 'react'
import { Transition } from '@headlessui/react'
import Image from 'next/image'

import { Header } from './header/Header'

import hero from 'images/hero.jpg'

export function Hero() {

  const [showTitle, setShowTitle] = useState(false)
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="xl:w-1/2">
        <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 xl:w-full xl:pb-28 xl:pb-32">
          <div className='xl:pl-24'>
            <Header />
          </div>
          <svg
            className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white xl:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
          <main className="mx-auto mt-10 px-4 sm:mt-12 sm:px-6 md:mt-16 xl:mt-20 xl:pl-40 xl:pr-24 xl:mt-28">
            <div className="sm:text-center xl:text-left">
              <h1 className="relative overflow-hidden text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
                <Transition
                  appear
                  show={!showTitle}
                  className="absolute w-full h-full bg-white"
                  leave="transition ease-in-out duration-[2000ms] transform"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                </Transition>

                <span className="inline text-white bg-stone-800 px-2">Echelon</span>{' '}
                <span className="inline text-stone-800 xl:inline">Grupė</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl xl:mx-0">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                fugiat veniam occaecat fugiat aliqua.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center xl:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-stone-800 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                  >
                    Susisiekti
                  </a>
                </div>

              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="xl:absolute xl:inset-y-0 xl:right-0 xl:w-1/2">
        <Transition
          show
          appear
          enter="transform transition ease-out duration-[1000ms]"
          enterFrom="scale-150 opacity-0"
          enterTo="scale-100 opacity-100"
          afterEnter={() => setShowTitle(true)}
        >
          <Image src={hero} alt="Hero image" />
        </Transition>
      </div>
    </div>
  )
}
