import { useState } from 'react'
import './Filters.css'

import useFilters from '../hooks/useFilters'

const Filters = () => {
  
  const [minPrice, setMinPrice] = useState(0)
  const { filters ,setFilters } = useFilters()


  const handleMinPrice = (e) => {
    setMinPrice(e.target.value)
    setFilters((prev) => ({
      ...prev, minPrice: e.target.value//el 'prev' es de los otros elementos del objeto. en este caso solo category
    }))
  }


  const handleChangeFilters = (e) => {
    setFilters((prev) => ({
      ...prev, category: e.target.value
    }))
  }
  
  return (
    <section className='filters'>
      <div>
        <label htmlFor="price">Price</label>
        <input 
          type="range"
          id='price'
          min={0}
          max={1000}
          onChange={handleMinPrice}
          value={filters.minPrice} 
        />
        <span>€{filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor="category">Category</label>
        <select name="" id="" onChange={handleChangeFilters}>
          <option value="all">All</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Smartphones</option>fragrances
          <option value="fragrances">Fragrances</option>
          <option value="groceries">Groceries</option>
          <option value="home-decoration">Home Decoration</option>
        </select>
      </div>
    </section>
  )
}

export default Filters