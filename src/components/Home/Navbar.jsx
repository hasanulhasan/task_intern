import { Link } from 'react-router-dom';
import LogoBlack from '../../assets/logoBlack.png'
import downArrow from '../../assets/Down arrow.png'
const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between h-20 mx-32 my-5 text-lg font-bold">
      <div>
        <ul className="list-none flex items-center">
          <Link to='/'><li className="px-4 ml-4 h-[45px]"><img src={LogoBlack} height="45px" alt='logo'/></li></Link>
          <li className="px-4 mx-4">Solutions <img className='inline-block' src={downArrow} alt='down arrow'/> </li>
          <li className="px-4 mx-4">Features <img className='inline-block' src={downArrow} alt='down arrow'/></li>
          <li className="px-4 mx-4">Blogs</li>
          <li className="px-4 mx-4">About <img className='inline-block' src={downArrow} alt='down arrow'/></li>
        </ul>
      </div>
      <div>
        <ul className="list-none flex items-center">
          <li><button className="mr-4 border text-primary-500 border-primary-500 font-bold py-2 px-4 rounded-lg">Login</button></li>
          <li><button className=" text-white rounded-lg py-2 px-4 bg-primary-500">Register</button></li>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Navbar;