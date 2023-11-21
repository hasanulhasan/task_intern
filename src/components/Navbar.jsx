
const Navbar = () => {
  return (
    <>
      <div className="flex justify-between h-20 mx-32 my-5 text-lg font-bold">
      <div>
        <ul className="list-none flex">
          <li className="px-4 ml-4">LogoIpsum</li>
          <li className="px-4 mx-4">Solutions</li>
          <li className="px-4 mx-4">Features</li>
          <li className="px-4 mx-4">Blogs</li>
          <li className="px-4 mx-4">About</li>
        </ul>
      </div>
      <div>
        <ul className="list-none flex">
          <li><button className="mr-4 border-2 text-blue-500 border-blue-500 font-bold py-2 px-4 rounded-lg">Login</button></li>
          <li><button className=" text-white rounded-lg py-2 px-4 bg-blue-500">Register</button></li>
        </ul>
      </div>
      </div>
    </>
  );
};

export default Navbar;