function CartItem({ item, updateQuantity, removeItem }) {
  return (
    <div className="flex items-center justify-between bg-white shadow p-4 rounded mb-4">
      <div className="flex items-center gap-4">
        <img src={item.image} alt={item.name} className="h-16 w-16 object-cover rounded" />
        <div>
          <h4 className="font-bold">{item.name}</h4>
          <p>${item.price}</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => updateQuantity(item.id, -1)}
          className="bg-gray-300 px-3 py-1 rounded"
        >-</button>

        <span>{item.quantity}</span>

        <button
          onClick={() => updateQuantity(item.id, 1)}
          className="bg-gray-300 px-3 py-1 rounded"
        >+</button>

        <button
          onClick={() => removeItem(item.id)}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default CartItem;