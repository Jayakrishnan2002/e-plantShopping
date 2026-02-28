function CartItem({ item, updateQuantity, removeItem }) {
  return (
    <div className="flex items-center justify-between bg-white shadow p-4 rounded mb-4">
      <div className="flex items-center gap-4">
        <img src={item.image} alt={item.name} className="h-16 w-16 object-cover rounded" />
        <div>
          <h4 className="font-bold text-lg">{item.name}</h4>
          <p className="text-gray-600">Unit Price: ${item.price}</p>
          {/* Added Subtotal calculation for this specific item */}
          <p className="text-green-700 font-semibold">Subtotal: ${item.price * item.quantity}</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => updateQuantity(item.id, -1)}
            className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded font-bold"
          >-</button>

          <span className="w-8 text-center font-bold">{item.quantity}</span>

          <button
            onClick={() => updateQuantity(item.id, 1)}
            className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded font-bold"
          >+</button>
        </div>

        <button
          onClick={() => removeItem(item.id)}
          className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default CartItem;