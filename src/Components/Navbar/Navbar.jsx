/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-1 top-0 left-0">
        <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
          <div>
            <a href="#" className='font-semibold hover:text-blue-600 font-mono '>
                 <FontAwesomeIcon icon={faHouse} className="text-blue-400 text-3xl space-x-4" />   

                 Real Estate
           </a>
        </div>
          <ul className='space-x-3 text-gray-500'>
          <li><a href="#home" className='hover:text-blue-500'>Home</a></li>

        </ul>
          </div>
          
      
    </nav>
  )
}

export default Navbar 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-10 top-0 left-0">
      <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
        <Link to="/" className='font-semibold hover:text-blue-600 font-mono flex items-center gap-2'>
          <FontAwesomeIcon icon={faHouse} className="text-blue-400 text-3xl" />
          Real Estate
        </Link>
        <ul className='flex gap-4 text-gray-500'>
          <li><Link to="/" className='hover:text-blue-500'>Home</Link></li>
          <li><Link to="/contact" className='hover:text-blue-500'>Contact</Link></li>
          <li><Link to="/faqs" className='hover:text-blue-500'>FAQs</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0 left-0">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="/"
          className="font-semibold hover:text-blue-600 font-mono flex items-center gap-2 text-gray-700 text-lg"
          aria-label="Home link"
        >
          <FontAwesomeIcon icon={faHouse} className="text-blue-500 text-2xl" />
          Real Estate
        </a>

        <ul className="flex gap-6 text-gray-600 font-medium">
          <li>
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer hover:text-blue-500 transition-colors"
              activeClass="text-blue-600 font-bold"
              spy={true}
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="houses"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer hover:text-blue-500 transition-colors"
              activeClass="text-blue-600 font-bold"
              spy={true}
            >
              Houses
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer hover:text-blue-500 transition-colors"
              activeClass="text-blue-600 font-bold"
              spy={true}
            >
              Contact
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="faqs"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer hover:text-blue-500 transition-colors"
              activeClass="text-blue-600 font-bold"
              spy={true}
            >
              FAQs
            </ScrollLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;



