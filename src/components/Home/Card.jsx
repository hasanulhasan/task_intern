/* eslint-disable react/prop-types */

const Card = ({card}) => {
  const {no, noEnd, title, description, date, fee} = card
  return (
    <div className="shadow-lg shadow-lg w-[405px] rounded-3xl">
    <div className="bg-gradient-to-r from-gradient1-500 to-gradient2-500 text-center w-12 text-white font-bold p-2 rounded-xl -ml-3"><span
            className="text-2xl">{no}</span><sup>{noEnd}</sup>
    </div>
    <div className="p-4">
        <div className="text-center font-bold text-3xl">{title}</div>
        <p className="text-center text-lg px-2">{description}</p>
        <div className="bg-gray-100 flex justify-between mt-5 p-5 items-center rounded-xl">
            <div>
                <h1 className="text-info font-bold text-xl text-sky-500 pb-3">Due date</h1>
                <p className="text-lg">Within {date}</p>
                <p className="text-lg">days</p>
            </div>
            <div>
                <h1 className="text-info font-bold text-xl text-red-500 pb-3">Penalty fees</h1>
                <h1><span className="font-bold ">&#8377; {fee}</span> for the company</h1>
                <h1><span className="font-bold ">&#8377; 1,000</span> /day for directors</h1>
            </div>
        </div>
    </div>
</div>
  );
};

export default Card;