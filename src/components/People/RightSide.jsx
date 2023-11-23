import jackSon from '../../assets/jackson.png'
const RightSide = () => {
  return (
    <div>
      
      <div className="max-w-[733px] mx-auto mb-20">
            <div>
                <img src={jackSon} className="lg:w-full" alt=""/>
            </div>
            <div>
                <h1 className="text-4xl font-bold mt-8">
                    About Michael Jackson
                </h1>
            </div>
            <div className="lg:flex items-center justify-between mt-8">
                <div>
                    <p className='font-semibold text-deem-500'>FROM</p>
                    <h1 className="mt-3 text-xl">INDIA</h1>
                </div>
                <div>
                    <p className='font-semibold text-deem-500'>PARTNER SINCE</p>
                    <h1 className="mt-3 text-xl">2011</h1>
                </div>
                <div>
                    <p className='font-semibold text-deem-500'>AVERAGE RESPONSE TIME</p>
                    <h1 className="mt-3 text-xl">30 minutes</h1>
                </div>
            </div>
            <div>
                <p className="mt-10 text-deem-500 font-semibold">ABOUT</p>
            </div>
            <div>
                <p className="mt-3 text-xl w-[400px] lg:w-full">I am a Professional Charted Accountant here to offer professional services of
                    accounting and finance,
                    financial statements, Bookkeeping in affordable price.</p>
            </div>
            <div className="lg:flex justify-between mt-9 text-left">
                <div>
                    <p className="text-deem-500 font-semibold mb-3">SERVICES I OFFER</p>
                    <ul className="ms-10 list-disc">
                        <li className="text-xl mb-2">Financial accounting</li>
                        <li className="text-xl mb-2">Financial statements</li>
                        <li className="text-xl mb-2">Bookkeeping</li>
                        <li className="text-xl mb-2">Accounting and finance</li>
                        <li className="text-xl mb-2">Corporate Finance</li>
                        <li className="text-xl mb-2">Maintain Charts of Accounts</li>
                        <li className="text-xl mb-2">Profit and loss statements</li>
                        <li className="text-xl mb-2">Bank Reconciliation</li>
                        <li className="text-xl mb-2">Balance Sheets</li>
                    </ul>
                </div>
                <div>
                    <p className="text-deem-500 font-semibold mb-3">WHY ME?</p>
                    <ul className="ms-10 list-disc">
                        <li className="text-xl mb-2">One-time delivery</li>
                        <li className="text-xl mb-2">24/7 customer support</li>
                        <li className="text-xl mb-2">Error-free documents</li>
                    </ul>
                </div>
            </div>
            <div></div>
        </div>
      
    </div>
  );
};

export default RightSide;