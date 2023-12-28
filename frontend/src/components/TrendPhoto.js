import React from 'react';
import './TrendPhoto.css';
import { faker } from '@faker-js/faker';

const TrendPhoto = () => {
  const generateRandomData = () => ({
    name: faker.commerce.productName(), // Generate a random name using faker
    image: faker.image.urlLoremFlickr({ category: 'commerce' }), // Generate a random image URL using faker
  });

  // Generate an array of 5 random data objects
  const randomDataArray = Array.from({ length: 5 }, generateRandomData);


  return (
    <div className='allTrendyImages'>
      {randomDataArray.map((data, index) => (
        <div key={index}>
          <img className='trendyImage' src={data.image} alt='altImage'></img>
          <p className='trendyImageName'>{data.name}</p>
        </div>
      ))}
    </div>
  )
}

export default TrendPhoto
