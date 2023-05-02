import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='bar'>
        <h4>Home</h4>
        <FontAwesomeIcon icon={faShoppingCart} />
    </div>
  );
};

export default Navbar;
