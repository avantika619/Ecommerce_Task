import React, { useContext, useEffect, useState } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../context/ShopContext";
import Item from "../components/item/Item";
import Filter from "./filterPopUp";
import { useSelector } from "react-redux";

const ShopCategory = (props) => {
  const { allProduct } = useContext(ShopContext);
  const [filters, setFilters] = useState({
    priceRange: [],
    brands: [],
    rating: null,
  });
  const [search,setSearch]=useState("")

  const searchQuery1=useSelector(state => state.search.searchValue);
  console.log("rishabh search2w3333333",searchQuery1)
  useEffect(
    ()=>{
      setSearch(searchQuery1 || "");
    
    },[searchQuery1]
  )

  const applyFilters = (selectedFilters) => {
    setFilters(selectedFilters);
  };

  const filteredProducts = allProduct.filter((item) => {
    // Check if the product's price falls within any selected price range
    const priceMatches = filters.priceRange.length === 0 || filters.priceRange.some((range) => {
      const [min, max] = range.split('-').map(Number);  // Extract min and max from the range string
      return item.old_price >= min && item.old_price <= max;  // Check if product's price is within the range
    });
  
    const brandMatches = filters.brands.length === 0 || filters.brands.includes(item.brand);
    const ratingMatches = filters.rating === null || item.rating >= filters.rating;
    const searchFilter = typeof search === 'string' && search.trim() // Check if search is a non-empty string
    ? item.keywords.some((keyword) =>
        keyword.toLowerCase().includes(search.toLowerCase())
      )
    : true;
    return priceMatches && brandMatches && ratingMatches && searchFilter ;
  });
  

  console.log("filters",filters)

  return (
    <div className="shop-category">
    <img className="shopCategoryBanner" src={props.banner} alt="" />
      <Filter onApplyFilters={applyFilters} />
      <div className="shopCategory-product">
        {filteredProducts.map((item) => (
          <Item
            id={item.id}
            key={item.id}
            name={item.name}
            image={item.image}
            old_price={item.old_price}
            new_price={item.new_price}
            rating={item.rating}
          />
        ))}
      </div>
      <div className="explore">
        <button>Explore More</button>
      </div>
    </div>
  );
};

export default ShopCategory;
