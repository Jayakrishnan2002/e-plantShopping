function ProductCard({ plant, addToCart }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={plant.image} alt={plant.name} className="h-48 w-full object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-lg">{plant.name}</h3>
        <p className="text-green-600 font-semibold">${plant.price}</p>
        <button
          onClick={() => addToCart(plant)}
          className="mt-3 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;