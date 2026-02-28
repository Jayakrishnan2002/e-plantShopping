import plants from "../data";
import ProductCard from "../components/ProductCard";

function ProductList({ addToCart }) {
  const categories = [...new Set(plants.map(p => p.category))];

  return (
    // Use w-full and px-4 to ensure it uses the whole available width
    <div className="w-full px-4 py-10"> 
      {categories.map(category => (
        <div key={category} className="max-w-7xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold mb-8 capitalize text-gray-800 border-b-2 border-green-500 inline-block">
            {category}
          </h2>
          
          {/* grid-cols-1: Mobile 
            sm:grid-cols-2: Small tablets
            md:grid-cols-3: Large tablets and Laptops (Forces 3 columns earlier)
          */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {plants
              .filter(p => p.category === category)
              .map(plant => (
                <ProductCard
                  key={plant.id}
                  plant={plant}
                  addToCart={addToCart}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;