/* eslint-disable react/prop-types */
import calender from '../../assets/calender.png'

const LeftSide = ({data}) => {
  const {name, deliveryTime, intro, price, rating, reviewCount, taskComplexity, testimonial} = data; 
  const {text} = testimonial
  return (
    <div className="w-max-[515]">
      <div className="">
            <h1 className="font-bold text-4xl mb-5">{name}</h1>
            <p className="text-xl">{intro}</p>
            <div className="flex items-center mt-5 mb-5">
                <svg className="w-10 h-10 text-primary-500 ms-1 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor" viewBox="0 0 30 24">
                    <path
                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <span className="text-xl">
                    <span className="text-primary-500 font-bold">{rating}</span> ({reviewCount})</span>
            </div>
      </div>

      <div className="shadow-xl rounded-3xl p-6">
            <div className="justify-between items-center flex">
                <h1 className="text-xl">{taskComplexity}</h1>
                <h1 className="font-bold text-xl">{price}</h1>
            </div>
            <div className="text-xl mt-6">
                <img src={calender} alt='calender icon' className='inline-block'/> {deliveryTime}
            </div>
            <div className="flex items-center justify-evenly mt-5">
                <div className="">
                    <button
                        className="bg-primary-500 text-white font-bold w-full py-3 px-8 text mb-5 rounded-xl">Request
                        Proposal</button>
                </div>
                <div className="">
                    <button
                        className="border border-primary-500 text-primary-500 px-8 font-bold w-full py-3 mb-5 rounded-xl">Chat
                        with me</button>
                </div>
            </div>
      </div>
      
        <div className='max-w-2xl mx-auto shadow-2xl p-6 rounded-lg mt-5'>
            <h1 className="font-bold text-4xl my-5">What people say?</h1>
            <p className="text-xl">
                {text}<br/><br/>
            </p>
        </div>
    </div>
  );
};

export default LeftSide;