import React from 'react';
import './FilterMenu.css';
import ReactStars from "react-rating-stars-component";

const FilterMenu = ({ updateFilters }) => {
    const handleRatingChange = (rating) => {
        updateFilters((prevFilters) => ({
            ...prevFilters,
            ratings: prevFilters.ratings.includes(rating)
                ? prevFilters.ratings.filter((r) => r !== rating)
                : [...prevFilters.ratings, rating],
        }));
    };

    return (
        <div className='filterMenuContainer'>
            <h1>Search Results</h1>
            <div className='filterBoxes'>
                <p className='filterHeader'>BRAND</p>
                <div className='checks'>
                    <div className='checkAndName'>
                        <input
                            type="checkbox" /> Mango
                    </div>
                    <div className='checkAndName'>
                        <input
                            type="checkbox" /> H&M
                    </div>
                </div>
            </div>

            <hr></hr>

            <div className='filterBoxes'>
                <p className='filterHeader'>PRICE RANGE</p>
                <div className='checks'>
                    <div className='checkAndName'>
                        <input
                            type="checkbox" /> Under 500
                    </div>
                    <div className='checkAndName'>
                        <input
                            type="checkbox" /> 1000 to 3000
                    </div>
                </div>
            </div>

            <hr></hr>

            <div className='filterBoxes'>
                <p className='filterHeader'>RATINGS</p>
                <div className='checks'>
                    {[5, 4, 3, 2, 1].map((rating) => (
                        <div key={rating} className='checkAndName'>
                            <input
                                type="checkbox"
                                id={`rating-${rating}`}
                                onChange={() => handleRatingChange(rating)}
                            />
                            <label htmlFor={`rating-${rating}`}>
                                <ReactStars
                                    edit={false}
                                    size={20}
                                    value={rating}
                                    isHalf={false}
                                    activeColor="#ffd700"
                                />
                            </label>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default FilterMenu
