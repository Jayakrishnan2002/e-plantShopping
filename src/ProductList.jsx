import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import plants from './data'; // Ensure this has 6+ plants per category

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const categories = [...new Set(plants.map(p => p.category))];

  return (
    <div className="product-grid">
      {categories.map(category => (
        <div key={category}>
          <h2 className="category-title">{category}</h2>
          <div className="plants-list">
            {plants.filter(p => p.category === category).map(plant => (
              <div key={plant.id} className="plant-card">
                <img src={plant.image} alt={plant.name} />
                <h3>{plant.name}</h3>
                <p>{plant.description}</p>
                <p>${plant.cost}</p>
                <button 
                  disabled={cartItems.some(item => item.name === plant.name)}
                  onClick={() => handleAddToCart(plant)}>
                  {cartItems.some(item => item.name === plant.name) ? "Added" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;