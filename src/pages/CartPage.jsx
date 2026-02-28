import CartItem from "../components/CartItem";
import { useNavigate } from "react-router-dom";

function CartPage({ cart, updateQuantity, removeItem }) {
  const navigate = useNavigate();

  const totalCost = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>

      {cart.length === 0 && <p>Your cart is empty.</p>}

      {cart.map(item => (
        <CartItem
          key={item.id}
          item={item}
          updateQuantity={updateQuantity}
          removeItem={removeItem}
        />
      ))}

      <div className="mt-6 text-xl font-bold">
        Total Cost: ${totalCost}
      </div>

      <div className="mt-6 space-x-4">
        <button
          onClick={() => navigate("/products")}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Continue Shopping
        </button>

        <button className="bg-green-600 text-white px-4 py-2 rounded">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartPage;