/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';

const ReferCard = ({ca}) => {
    const navigate = useNavigate();
    const {id, name, intro, price, rating, reviewCount, image} = ca;

    const handleCA = (id) => {
        navigate(`/${id}`)
    }

  return (
    <div className="bg-white shadow-md rounded-xl w-[405px]">
            <a href="#">
                <img src={image} alt={`${name}`} className="h-80 w-[450px] rounded-3xl object-cover rounded-t-xl"/>
            </a>
            <div className="px-5">
                <div className="flex justify-between items-center mt-5">
                    <h1 className="font-bold text-xl">{name}</h1>
                    <span className="font-bold text-xl">{price}</span>
                </div>
                <div>
                    <p className="mt-3">
                        {intro}
                    </p>
                </div>
                <div className="flex items-center my-3">
                    <svg className="w-10 h-10 text-primary-500 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor" viewBox="0 0 30 24">
                        <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className="text-xl">
                        <span className="text-primary-500 font-bold ">{rating}</span> ({reviewCount})
                    </span>
                </div>

            </div>
            <div className="text-center">
                <button
                    onClick={()=> handleCA(id)}
                    className="bg-primary-500 text-white px-4 w-11/12 py-4 font-bold mb-5 rounded-xl">View
                    services</button>
            </div>
        </div>
  );
};

export default ReferCard;