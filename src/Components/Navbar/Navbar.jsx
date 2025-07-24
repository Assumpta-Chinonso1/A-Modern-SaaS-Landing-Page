import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-1 top-0 left-0">
        <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
          <div>
            <a href="#" className='font-semibold hover:text-blue-600 font-mono'>
                 <FontAwesomeIcon icon={faHouse} className="text-blue-600 text-3xl space-x-1" />

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