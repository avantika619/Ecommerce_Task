import React from 'react'
import './NewCollections.css'
import newCollections from '../assets/all_product'
import Item from '../item/Item'

const NewCollections = () => {
  const handleAddToCart = (itemkeyword) => {
    console.log(`${itemkeyword} added to cart`);
  };
  return (
    <div className='new-collections'>
        <h1>ACCESSORIES</h1>
        <hr />
        <div className='new-collection-items'>
        {
            newCollections.map((item)=>{
                return(
                    <Item
                    id={item.id}
                    key={item.id}
                    name={item.name}
                    image={item.image}
                    old_price={item.old_price}
                    new_price={item.new_price}
                    rating={item.rating}
                  />
                )
            })
        }
        </div>
    </div>
  )
}

export default NewCollections