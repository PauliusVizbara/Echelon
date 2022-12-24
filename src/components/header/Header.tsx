import Link from 'next/link'

import { Container } from 'components/Container'
import { NavLink } from 'components/NavLink'
import Image from 'next/image'
import logo from 'images/logo.png'
import { MobileNavigation } from './MobileNavigation'



export function Header() {
  return (
    <header className="py-10">
      <Container className="">
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link href="#" aria-label="Home">
              <Image
                src={logo}
                alt="Logo"
                height={50}
              />
            </Link>
            <div className="hidden md:flex md:gap-x-6">
              <NavLink href="#features">Apie</NavLink>
              <NavLink href="#testimonials">Paslaugos</NavLink>
              <NavLink href="#pricing">Kontaktai</NavLink>
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}
