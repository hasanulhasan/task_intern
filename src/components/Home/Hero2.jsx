import file from '../../assets/file.png'
import people from '../../assets/people.png'
import search from '../../assets/search.png'
import education from '../../assets/education.png'
import people4 from '../../assets/People 4.png'
import people5 from '../../assets/People 5.png'

const Hero2 = () => {
  return (
    <div className="mx-32 flex my-32">
      <div className="w-1/2">
        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl"><span className="bg-gradient-to-r from-gradient1-500 to-gradient2-500 text-transparent bg-clip-text">All-in-One</span> platform <br/> that Makes Easier</h1>
        <h2 className="max-w-2xl my-6 font-light text-deem-500 lg:my-8 md:text-lg lg:text-xl pr-12">We are more than a platform; We are your success partner. Discover our services to achieve your business and educational goals</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 gap-8">
          <div className="flex gap-4">
              <img src={search} height='65px' width="65px"/>
              <h1 className='mr-8'><span className='font-bold'>SEARCH</span> for vital company information </h1>
          </div>
          <div className="flex gap-4">
              <img src={people} height='65px' width="65px"/>
              <h1 className='mr-8'><span className='font-bold'>CONNECT</span> with the resources to meet your business needs</h1>
          </div>
          <div className="flex gap-4">
              <img src={file} height='65px' width="65px"/>
              <h1 className='mr-8'><span className='font-bold'>RESEARCH</span> and generate reports that drive growth </h1>
          </div>
          <div className="flex gap-4">
              <img src={education} height='65px' width="65px"/>
              <h1 className='mr-8'><span className='font-bold'>ACADEMY</span> to give you the skills for success in your career </h1>
          </div>
        </div>

      </div>
      
      <div className="hidden lg:mt-0 lg:col-span-5 lg:flex lg:gap-2 w-1/2">
        <div><img className="rounded-3xl" src={people4} alt="photo" height='403px' width='198px'/></div>
        <div><img className="rounded-3xl" src={people5} alt="photo" height='403px' width='198px'/></div>
      </div>
    </div>
  );
};

export default Hero2;