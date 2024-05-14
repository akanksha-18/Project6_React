import React, { useState, useEffect } from 'react';
import FoodItem from './FoodItem'; 
import './Food.css'; 

const Food = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [uniqueCountries, setUniqueCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
        const data = await response.json();
        const countries = data.meals.map(meal => meal.strArea);
        const uniqueCountries = Array.from(new Set(countries));
        setUniqueCountries(uniqueCountries);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        let url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
        if (selectedCountry !== '') {
          url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${selectedCountry}`;
        }
        const response = await fetch(url);
        const data = await response.json();
        setSearchResults(data.meals ? data.meals : []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [selectedCountry]);

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleCountryChange = event => {
    setSelectedCountry(event.target.value);
  };

  const filteredResults = searchResults.filter(meal => {
    return (
      meal.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className='main'>
  <div className='heading'>
    <h1>Search your Food Recipe</h1>
  </div>
  <div className="merge">
    <div className="searchBox">
      <input
        type="search"
        className='search-btn'
        placeholder='Enter food name'
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
    <div className="filters">
      <select value={selectedCountry} onChange={handleCountryChange}>
        <option value="">All Cuisines</option>
        {uniqueCountries.map((country, index) => (
          <option key={index} value={country}>{country}</option>
        ))}
      </select>
    </div>
  </div>
  <div className='container'>
    {isLoading && <div className="loading">Loading...</div>}
    {filteredResults.length === 0 && !isLoading && (
      <div className="no-results">No results found.</div>
    )}
    {filteredResults.map(meal => (
      <FoodItem key={meal.idMeal} data={meal} />
    ))}
  </div>
</div>
  );
}

export default Food;



