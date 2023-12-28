import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import './SearchBar.css'


const SearchBar = () => {
    return (
        <div className='searchContainer'>
            <div className='searchWrapper'>
                <input
                    className='textArea'
                    type="text"
                    placeholder="Search"
                />
                <Link to='/postSearch'><SearchIcon className='searchIcon' fontSize='large' /></Link>
            </div>
        </div>
    )
}

export default SearchBar