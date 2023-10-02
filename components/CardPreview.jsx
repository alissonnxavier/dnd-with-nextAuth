"use client"


import GetCards from '@/components/helpers/GetCards';
import { RingLoader } from 'react-spinners';
import MiniCard from '@/components/MiniCard';

const CardPreview = () => {

  let cards = [];
  cards = GetCards();
  if (cards.length == 0) {
    return (
      <div className="flex justify-center items-center mt-40">
        <RingLoader color="#fc0335" size={250} />
      </div>
    )
  }

  return (
    <>
      <div className='w-4/5 flex flex-wrap justify-center items-center  '>
        {cards?.data?.data?.map((card) => (
          <div key={card._id}>
            <MiniCard 
              title={card?.title}
              description={card?.description}
              images={card?.image}
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default CardPreview