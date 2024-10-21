import React, { useState } from 'react';
import './CSS/FilterPopup.css';

const FilterPopup = ({ onApplyFilters }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    priceRange: [],
    brands: [],
    rating: null,
  });

//   const [filter,setFilter]=useState({})

  const toggleModal = () => {
    setIsOpen(!isOpen);
    // setSelectedFilters({})
  };

  const handleApplyFilters = () => {
    onApplyFilters(selectedFilters);
    toggleModal();
  };

  const handlePriceChange = (value) => {
    setSelectedFilters((prev) => {
      const newRange = prev.priceRange.includes(value)
        ? prev.priceRange.filter((item) => item !== value)
        : [...prev.priceRange, value];
      return { ...prev, priceRange: newRange };
    });
  };

  const handleBrandChange = (value) => {
    setSelectedFilters((prev) => {
      const newBrands = prev.brands.includes(value)
        ? prev.brands.filter((item) => item !== value)
        : [...prev.brands, value];
      return { ...prev, brands: newBrands };
    });
  };

  const handleRatingChange = (value) => {
    setSelectedFilters((prev) => ({ ...prev, rating: value }));
  };

  return (
    <div>
      <button onClick={toggleModal} className="filter-btn">Open Filter</button>

      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span onClick={toggleModal} className="close">&times;</span>
            <h2>Filter</h2>

            {/* Price Range Filter */}
            <div className="filter-section">
              <h3>Price Range</h3>
              <label>
                <input type="checkbox" name="price" value="1500-2499" onChange={() => handlePriceChange("1500-2499")} checked={selectedFilters.priceRange.includes("1500-2499")} /> ₹1500-₹2499
              </label>
              <label>
                <input type="checkbox" name="price" value="2500-3500" onChange={() => handlePriceChange("2500-3500")} checked={selectedFilters.priceRange.includes("2500-3500")}/> ₹2500-₹3500
              </label>
            </div>

            {/* Brand Filter */}
            <div className="filter-section">
              <h3>Brands</h3>
              <label>
                <input type="checkbox" name="brand" value="Panasonic" onChange={() => handleBrandChange("Panasonic")} checked={selectedFilters.brands.includes("Panasonic")}/> Panasonic
              </label>
              <label>
                <input type="checkbox" name="brand" value="Dell" onChange={() => handleBrandChange("Dell")} checked={selectedFilters.brands.includes("Dell")}/> Dell
              </label>
              <label>
                <input type="checkbox" name="brand" value="Apple" onChange={() => handleBrandChange("Apple")} checked={selectedFilters.brands.includes("Apple")}/> Apple
              </label>
            </div>

            {/* Rating Filter */}
            <div className="filter-section">
              <h3>Rating</h3>
              <label>
                <input type="radio" name="rating" value="4" onChange={() => handleRatingChange(4)} /> 4 Stars & above
              </label>
              <label>
                <input type="radio" name="rating" value="3" onChange={() => handleRatingChange(3)} /> 3 Stars & above
              </label>
              <label>
                <input type="radio" name="rating" value="2" onChange={() => handleRatingChange(2)} /> 2 Stars & above
              </label>
            </div>

            {/* Apply Filter Button */}
            <button className="apply-btn" onClick={handleApplyFilters}>Apply Filters</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterPopup;
