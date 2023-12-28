import React,{useState} from 'react';
import SearchBar from './SearchBar';
import './Products.css';
import FilterMenu from './FilterMenu';
import FilterPhotos from './FilterPhotos';
import Logo from '../images/Logo.png'

const Products = () => {
    const [filters, setFilters] = useState({ ratings: [], priceRanges: [] });

    const updateFilters = (newFilters) => {
        setFilters(newFilters);
    };

    return (
        <div className='productsContainer'>
            <img className='logo' src={Logo} alt='logo'></img>

            <div className='productSearchBar'>
                <SearchBar />
            </div>
            <div className='belowSearch'>
                <div className='filterMenu'>
                    <FilterMenu  updateFilters={updateFilters} />
                </div>
                <div className='filterPhotos'>
                    <FilterPhotos filters={filters} />
                </div>
            </div>
        </div>
    )
}

export default Products