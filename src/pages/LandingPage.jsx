import { useNavigate } from "react-router-dom";
import "../App.css"; // CSS file import cheythittu undo ennu urappu varuthuka

function LandingPage() {
  const navigate = useNavigate();

  return (
    /* Tailwind classes-inu purame nammaൾ CSS-il undakkiya class ivide upayogikkuka */
    <div className="landing-page-container text-white px-4">
      
      {/* Welcome Heading */}
      <h1 className="text-6xl md:text-7xl font-bold mb-4 text-white drop-shadow-2xl text-center">
        Welcome to Paradise Nursery
      </h1>

      {/* Description Box */}
      <div className="description-box mb-8 shadow-xl">
        <p className="text-lg md:text-xl text-green-950 font-bold leading-relaxed">
          Discover beautiful indoor plants to brighten your home and purify your air. 
          Bring nature indoors with our hand-picked collection.
        </p>
      </div>

      {/* Get Started Button */}
      <button
        onClick={() => navigate("/products")}
        className="bg-green-600 text-white text-2xl px-10 py-4 rounded-full 
                   hover:bg-green-700 transition-all transform hover:scale-105 
                   shadow-2xl font-bold"
      >
        Get Started
      </button>
      
    </div>
  );
}

export default LandingPage;