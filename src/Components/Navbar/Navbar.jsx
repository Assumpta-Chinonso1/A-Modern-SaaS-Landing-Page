
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link as ScrollLink } from 'react-scroll'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(prev => !prev)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0 left-0">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <a href="/" className="font-semibold hover:text-blue-600 font-mono flex items-center gap-2">
          <FontAwesomeIcon icon={faHouse} className="text-blue-400 text-3xl" />
          Real Estate
        </a>


        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-600 font-medium">
          {['home', 'houses', 'contact', 'faqs'].map((item) => (
            <li key={item}>
              <ScrollLink
                to={item}
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer hover:text-blue-500 capitalize">
                {item}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Hamburger icon */}
        <button
           className="md:hidden text-2xl text-gray-700 z-50"
          onClick={toggleMenu}
          aria-label="Toggle menu">
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
        </button>

        {/* Fullscreen Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center gap-8 text-xl text-gray-700 transition-transform duration-300 ease-in-out ${
            menuOpen ? 'translate-x-0' : '-translate-x-full'
          }`} >

          {['home', 'houses', 'contact', 'faqs'].map((item) => (
            <ScrollLink
              key={item}
              to={item}
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer hover:text-blue-500 capitalize"
              onClick={closeMenu}>
              {item}
            </ScrollLink>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar





