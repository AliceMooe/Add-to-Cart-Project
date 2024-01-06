import React from 'react';
import Card from '../components/Card';

const laptops = [
  {
    ID : 1,
    Price : 999 ,
    Name : "MacBook Air 13” (M1 Chip) ",
    Description : "The most affordable Mac laptop to get things done on the go.",

  },
  {
    ID : 2,
    Price : 1099 ,
    Name : "MacBook Air 13” (M2 chip)",
    Description : "Strikingly thin and fast so you can work, play, or create anywhere.",

  },
  {
    ID : 3,
    Price : 1099 ,
    Name : "MacBook Air 15” (M2 chip)",
    Description : "Strikingly thin and fast so you can work, play, or create anywhere.",

  },
  {
    ID : 4,
    Price : 1599 ,
    Name : "MacBook Pro 14”  (M3, M3 Pro, or M3 Max chip)",
    Description : "The most advanced Mac laptops for demanding workflows.",

  },
  {
    ID : 5,
    Price : 1599 ,
    Name : "MacBook Pro 16”  (M3, M3 Pro, or M3 Max chip)",
    Description : "The most advanced Mac laptops for demanding workflows.",

  },

];


const Body = () => {
  return (
    <section className='bbody'>
      {
        laptops.map((laptop) => (
          
            <Card key={laptop.ID} laptop={laptop}  />
        ))
      }
    </section>
  )
}

export default Body;