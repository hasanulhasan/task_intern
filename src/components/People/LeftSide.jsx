import calender from '../../assets/calender.png'
const LeftSide = () => {
  return (
    <div className="w-max-[515] mr-15">
      <div className="">
            <h1 className="font-bold text-4xl mb-5">Michael Jackson</h1>
            <p className="text-xl">I am here to provide my expertise in accounting and finance, which includes financial statements,
                economics, and auditing, all to assist you effectively</p>
            <div className="flex items-center mt-5 mb-5">
                <svg className="w-10 h-10 text-primary-500 ms-1 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor" viewBox="0 0 30 24">
                    <path
                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <span className="text-xl">
                    <span className="text-primary-500 font-bold">4.8</span> (89)</span>
            </div>
      </div>

      <div className="shadow-xl rounded-3xl p-6">
            <div className="justify-between items-center flex">
                <h1 className="text-xl">Basic to complex tasks</h1>
                <h1 className="font-bold text-xl">₹4,370</h1>
            </div>
            <div className="text-xl mt-4">
                <img src={calender} alt='calender icon' className='inline-block'/> Delivers the job within 2 days
            </div>
            <div className="flex items-center justify-evenly mt-5">
                <div className="">
                    <button
                        className="bg-primary-500 text-white font-bold w-full py-3 px-10 text-xl mb-5 rounded-xl">Request
                        Proposal</button>
                </div>
                <div className="">
                    <button
                        className="border border-primary-500 text-primary-500 px-10 font-bold w-full py-3 text-xl mb-5 rounded-xl">Chat
                        with me</button>
                </div>
            </div>
      </div>
      
        <div className='max-w-2xl mx-auto shadow-2xl p-6 rounded-lg mt-5'>
            <h1 className="font-bold text-4xl my-5">What people say?</h1>
            <p className="text-xl">
                I cannot express enough gratitude for the support Micheal has provided in managing my
                personal finances. Their attention to detail and deep understanding of financial markets
                has ensured that my investments are in safe hands. I highly recommend their services to
                anyone seeking financial guidance.<br/><br/>
            </p>
        </div>
    </div>
  );
};

export default LeftSide;