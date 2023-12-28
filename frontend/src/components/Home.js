import React, { useState } from 'react';
import './Home.css';
import TrendPhoto from './TrendPhoto.js'
import Logo from '../images/Logo.png'
import SearchBar from './SearchBar';

const Home = () => {
  const [showTrends, setShowTrends] = useState(false);

  const handleSearchClick = () => {
    setShowTrends(true);
  }

  return (
    <div className={showTrends ? 'homeContainerWithTrends homeGen' : 'homeContainerWithoutTrends homeGen'}>
      <img className='logo' src={Logo} alt='logo'></img>

      <div className='homeSearchBar' onClick={handleSearchClick}>
        <SearchBar className='searchBarHome'/>
      </div>

      <div className={showTrends ? 'trendsContainer' : 'trendsContainerHidden'}>
        <p className='searchHeader'>Latest Trends</p>
        <TrendPhoto />
        <div className='popularSuggestions'>
          <p className='searchHeader'>Popular Suggestions</p>

          <p className='suggestions'>Striped shirt dress</p>
          <p className='suggestions'>Satin shirts</p>
          <p className='suggestions'>Denim jumpsuit</p>
          <p className='suggestions'>Leather dresses</p>
          <p className='suggestions'>Solid tshirts</p>
        </div>
      </div>

    </div>
  )
}

export default Home