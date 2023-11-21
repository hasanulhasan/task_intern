
const Hero = () => {
  return (
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">

      <div className="mr-auto place-self-center lg:col-span-7">
        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">Find <span className="text-primary-500">Partners</span> (CAs) <br/> available online</h1>
        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl"><span className="uppercase font-bold">Connect</span> with us where your services are listed and visible to a myriad of businesses seeking CA’s for compliance support</p>
        
        <div>
          <div className="relative mb-4 flex w-full flex-wrap items-stretch">
            <input
              type="search"
              className="relative m-0 -mr-0.5 block min-w-0 h-16 flex-auto rounded-2xl border border-solid bg-transparent px-3 py-2 text-base font-normal leading-[1.6] text-neutral-700 outline-none "
              placeholder="Search by name"/>
            <button
              className="bg-blue-500 relative z-[2] rounded-r border-2 border-primary px-6 py-2 font-medium text-white">
              Search
            </button>
          </div>
        </div>

      </div>

      <div className="hidden lg:mt-0 lg:col-span-5 lg:flex lg:gap-2">
        <div><img className="rounded-3xl" src="https://robincollettephotography.com/wp-content/uploads/sites/7154/2021/04/sacramento_headshot_photographer-1-1.jpg" alt="photo" height='403px' width='198px'/></div>
        <div><img className="rounded-3xl" src="https://robincollettephotography.com/wp-content/uploads/sites/7154/2021/04/sacramento_headshot_photographer-1-1.jpg" alt="photo" height='403px' width='198px'/></div>
        <div><img className="rounded-3xl" src="https://robincollettephotography.com/wp-content/uploads/sites/7154/2021/04/sacramento_headshot_photographer-1-1.jpg" alt="photo" height='403px' width='198px'/></div>
      </div>
      
    </div>
  );
};

export default Hero;