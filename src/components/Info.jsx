import Card from "./Card";

const cardInfo = [
  {
    no: 1,
    noEnd: 'st',
    title: "Commencement of business",
    description: 'Invested shareholders must confirm payment and office address',
    date: 180,
    fee: 50000
  },
  {
    no: 2,
    noEnd: 'nd',
    title: "Auditor Appointment",
    description: 'Company informs new auditor and submits ADT.1 form to ROC.',
    date: 30,
    fee: 300
  },
  {
    no: 3,
    noEnd: 'rd',
    title: "DIN eKYC",
    description: 'Directors share personal information for identification & verification ',
    date: 30,
    fee: 500
  },
  {
    no: 4,
    noEnd: 'th',
    title: "DPT-3",
    description: 'Companies report money taken from people to ROC; auditors confirm details.',
    date: 30,
    fee: 300
  },
  {
    no: 5,
    noEnd: 'th',
    title: "MCA Form AOC-4",
    description: "It's like an official report card for a company documents",
    date: 30,
    fee: 200
  },
  {
    no: 6,
    noEnd: 'th',
    title: "MCA Form MGT-7",
    description: "Companies must annually report activities and finances to the registrar.",
    date: 30,
    fee: 200
  },
];

const Info = () => {
  return (
    <div className="mx-32">
      <div>
      <h1 className="max-w-2xl mx-auto mb-6 text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl text-center">Want to <span className="bg-gradient-to-r from-gradient1-500 to-gradient2-500 text-transparent bg-clip-text">Join</span> us</h1>
        <p className="mx-auto text-center mb-6 font-light text-deem-500 lg:mb-8 md:text-lg lg:text-xl"> To remain with us, it is essential that you diligently follow the steps provided</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-8">
          {
            cardInfo.map(card=> <Card key={card.no} card={card}/>)
          }
      </div>
      <div className="my-6">
        <p className="text-lg">* For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200 <span className="font-bold">every day</span> until you file the form . There is no maximum penalty amount. So, if you don't file the form for a year, you will owe ₹73,000 per form</p>
      </div>
    </div>
  );
};

export default Info;