import React, { useState, useEffect } from 'react'
import { faker } from '@faker-js/faker';
import './FilterPhotos.css'
import ReactStars from 'react-rating-stars-component';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const FilterPhotos = ({filters}) => {

    const generateRandomData = () => ({
        name: faker.commerce.productName(),
        image: faker.image.urlLoremFlickr({ category: 'commerce' }),
        price: faker.number.int({ max: 3001 }),
        randomRating: faker.number.int({ min: 1, max: 5 }),
    });

    const [wishlist, setWishlist] = useState(new Array(8).fill(false));
    const [randomDataArray, setRandomDataArray] = useState([]);


    const handleWishlistClick = (index) => {
        const updatedWishlist = [...wishlist];
        updatedWishlist[index] = !updatedWishlist[index];
        setWishlist(updatedWishlist);
    };

    const filteredData = randomDataArray.filter((data) => {
        const meetsRatingFilter = filters.ratings.length === 0 || filters.ratings.includes(data.randomRating);
        
        return meetsRatingFilter;
    });

    useEffect(() => {
        const data = Array.from({ length: 8 }, generateRandomData);
        setRandomDataArray(data);
    }, []);

    return (
        <div className='filterPhotoContainer'>
            {filteredData.map((data, index) => (
                <div key={index} className='singleFilterImage'>
                    {wishlist[index] ? (
                        <div className='wishlistIconColor' onClick={() => handleWishlistClick(index)}>
                            <FavoriteIcon />
                        </div>
                    ) : (
                        <div className='wishlistIcon' onClick={() => handleWishlistClick(index)}>
                            <FavoriteBorderIcon />
                        </div>
                    )}
                    <div className='filterImage'>
                        <img className='filterImage' src={data.image} alt='altImage' />
                        <p className='popUp'>View Product</p>
                    </div>
                    <p className='trendyImageName'>{data.name}</p>

                    <h3>Rs {data.price}</h3>
                    <div className='productRatings'>
                        <ReactStars
                            edit={false}
                            size={20}
                            value={data.randomRating}
                            isHalf={false}
                            activeColor="#ffd700" />
                        <h4>(210)</h4>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default FilterPhotos