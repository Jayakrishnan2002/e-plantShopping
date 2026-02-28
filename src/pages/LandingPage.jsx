import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-white"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6')" }}>
      <h1 className="text-7xl font-bold mb-4 text-black pt-20 drop-shadow-[0_4px_4px_rgba(255,255,255,0.8)]">Paradise Nursery</h1>
      <p className="mb-6 text-lg text-center max-w-md text-green-950 font-bold 
              bg-white/40 backdrop-blur-md p-4 rounded-xl shadow-sm border border-white/20">
        Discover beautiful indoor plants to brighten your home and purify your air.
      </p>
      <button
        onClick={() => navigate("/products")}
        className="bg-green-600 text-2xl px-6 py-3 rounded-lg hover:bg-green-700 transition"
      >
        Get Started
      </button>
    </div>
  );
}

export default LandingPage;