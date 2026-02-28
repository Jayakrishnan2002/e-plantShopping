import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; // Added Link
import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import ProductList from "./ProductList";
import CartPage from "./pages/CartPage";
import Header from "./components/Header";

function App() {
  const [cart, setCart] = useState([]);

  // Company Name constant for visibility
  const companyName = "Welcome to Paradise Nursery";

  const addToCart = (plant) => {
    const existing = cart.find(item => item.id === plant.id);
    if (existing) {
      setCart(cart.map(item =>
        item.id === plant.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...plant, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, amount) => {
    setCart(cart
      .map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + amount }
          : item
      )
      .filter(item => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <BrowserRouter basename="/e-plantShopping/">
      {/* Header with Company Name Requirement */}
      <Header totalItems={totalItems} companyName={companyName} />
      
      <Routes>
        {/* Landing Page Route */}
        <Route path="/" element={<LandingPage companyName={companyName} />} />
        
        {/* Product List Route */}
        <Route path="/products" element={<ProductList addToCart={addToCart} />} />
        
        <Route path="/cart" element={
          <CartPage
            cart={cart}
            updateQuantity={updateQuantity}
            removeItem={removeItem}
          />
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;