import React from 'react';
import { Imagecard } from './imageCard';
import Container from '../container';

interface CardProps {
    image: any;
    label: string;
    text: string;
}

const Card  = () => {
    return (
      <Container>
        <div className='flex justify-center items-center my-8 p-10'>
          <span className='text-[#2E526B] text-4xl '>Solutions for your every need</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center pt-10">
          {Imagecard.map((card: CardProps) => (
            <div key={card.text}>
              <div className="flex flex-col items-center justify-center w-[300px] h-[300px] bg-white border-[1px] border-black/20 px-12 rounded-2xl py-14 dark:bg-trueGray-800 hover:shadow-lg hover:border-b-8 hover:border-b-indigo-500 transition-all duration-200">
                <Avatar
                  image={card.image}
                  name={card.text}
                  title={card.label}
                />
                <p className="text-xl leading-normal ">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    );
}

interface AvatarProps {
  image: string;
  name: string;
  title: string;
}

function Avatar({image, name, title}: AvatarProps) {
  return (
    <div className="flex flex-col items-center justify-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <img src={image} alt={name} />
      </div>
      <div className="text-gray-600 dark:text-gray-400">{title}</div>
    </div>
  );
}

export default Card;