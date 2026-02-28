import CartItem from "../CartItem";

function CartPage({ cart, updateQuantity, removeItem }) {
  // Total calculate cheyyunna logic
  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Your Shopping Cart</h2>
      
      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div>
          {cart.map(item => (
            <CartItem 
              key={item.id} 
              item={item} 
              updateQuantity={updateQuantity} 
              removeItem={removeItem} 
            />
          ))}
          
          {/* Requirement: Total Cart Amount Display */}
          <div className="mt-10 border-t pt-6 text-right">
            <h3 className="text-2xl font-bold">
              Total Cart Amount: <span className="text-green-700">${calculateTotalAmount()}</span>
            </h3>
            <button className="mt-4 bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;