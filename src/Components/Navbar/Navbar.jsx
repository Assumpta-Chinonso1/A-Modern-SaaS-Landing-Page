import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUmbrella } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-1 top-0 left-0">
        <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
           <a href="#" className='font-semibold hover:text-blue-600 font-mono'>
                 <FontAwesomeIcon icon={faUmbrella} className="text-purple-600 text-3xl" />
           </a>
        </div>
    </nav>
  )
}

export default Navbar