import people1 from '../../assets/Picture.png'
import people2 from '../../assets/Picture (1).png'
import people3 from '../../assets/Picture (2).png'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Hero = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState('');
  const [dataCA, setDataCA] = useState([]);

  const fetchData = (inputData) => {
    fetch('http://localhost:9000/ca_info')
    .then(res=> res.json())
    .then(data => {
      const result = data.filter(ca => {
        return inputData && ca && ca.name && ca.name.toLowerCase().includes((inputData).toLowerCase())
      })
      setDataCA(result);
    })
  }

  const handleSearch = (data) => {
    setInput(data);
    fetchData(data)
  }

  const handleCA = (data) => {
    navigate(`/${data.id}`)
  }

  return (
    <div>
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:my-24 lg:grid-cols-12">
      <div className="mr-auto place-self-center lg:col-span-7">
        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">Find <span className="bg-gradient-to-r from-gradient1-500 to-gradient2-500 text-transparent bg-clip-text">Partners</span> (CAs) <br/> available online</h1>
        <p className="max-w-2xl mb-6 font-light text-deem-500 lg:mb-8 md:text-lg lg:text-xl leading-loose"><span className="uppercase font-bold">Connect</span> with us where your services are listed and visible to a myriad of businesses seeking CA’s for compliance support</p>
        
        <div>
          <div className="relative mb-1 flex w-full flex-wrap items-stretch">
            <input
              value={input}
              onChange={e=> handleSearch(e.target.value)}
              type="search"
              className="relative m-0 -mr-0.5 block min-w-0 h-16 flex-auto rounded-2xl border-2 bg-transparent px-6 font-bold py-2 text-base leading-[1.6] text-deem-500 outline-none "
              placeholder="Search by name"/>
            <button
              className="bg-primary-500 absolute right-0 rounded-2xl h-16 border-2 px-14 py-2 font-medium text-white">
              Search
            </button>
          </div>
          <div className='absolute'>
            {
              dataCA && dataCA.map((ca,i) => <h1 onClick={()=> handleCA(ca)} key={i} className='bg-gray-100 mx-1 px-4 py-1 cursor-pointer'> {ca.name}</h1>)
            }
          </div>
        </div>
      </div>

      <div className="hidden lg:mt-0 lg:col-span-5 lg:flex lg:gap-2">
        <div className='object-none object-bottom'><img className="relative rounded-3xl" src={people1} alt="photo" height='403px' width='198px'/></div>
        <div><img className="rounded-3xl object-none relative object-top" src={people2} alt="photo" height='403px' width='198px'/></div>
        <div><img className="rounded-3xl bottom-0" src={people3} alt="photo" height='403px' width='198px'/></div>
      </div>
      
    </div>
    </div>
  );
};

export default Hero;