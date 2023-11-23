/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

const RightSide = ({data}) => {
    const {about, name, image} = data; 
    const {from, partnerSince, averageResponseTime, description, services, benefits} = about; 
  return (
    <div>
      
      <div className="max-w-[733px] mx-auto mb-20">
            <div>
                <img src={image} className="lg:w-full" alt=""/>
            </div>
            <div>
                <h1 className="text-4xl font-bold mt-8">
                    About {name}
                </h1>
            </div>
            <div className="lg:flex items-center justify-between mt-8">
                <div>
                    <p className='font-semibold text-deem-500'>FROM</p>
                    <h1 className="mt-3 text-xl">{from}</h1>
                </div>
                <div>
                    <p className='font-semibold text-deem-500'>PARTNER SINCE</p>
                    <h1 className="mt-3 text-xl">{partnerSince}</h1>
                </div>
                <div>
                    <p className='font-semibold text-deem-500'>AVERAGE RESPONSE TIME</p>
                    <h1 className="mt-3 text-xl">{averageResponseTime}</h1>
                </div>
            </div>
            <div>
                <p className="mt-10 text-deem-500 font-semibold">ABOUT</p>
            </div>
            <div>
                <p className="mt-3 text-xl w-[400px] lg:w-full">{description}</p>
            </div>
            <div className="lg:flex justify-between mt-9 text-left">
                <div>
                    <p className="text-deem-500 font-semibold mb-3">SERVICES I OFFER</p>
                    <ul className="ms-10 list-disc">
                        {
                            services.map((service,i)=> <li key={i} className="text-xl mb-2">{service}</li>)
                        }
                    </ul>
                </div>
                <div>
                    <p className="text-deem-500 font-semibold mb-3">WHY ME?</p>
                    <ul className="ms-10 list-disc">
                        {
                            benefits.map((benefit,i)=> <li key={i} className="text-xl mb-2">{benefit}</li>)
                        }
                    </ul>
                </div>
            </div>
            <div></div>
        </div>
      
    </div>
  );
};

export default RightSide;