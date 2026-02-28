import { Link } from "react-router-dom";

function Header({ totalItems }) {
  return (
    <header className="bg-green-700 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Paradise Nursery</h1>
      <nav className="space-x-6">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart 🛒 ({totalItems})</Link>
      </nav>
    </header>
  );
}

export default Header;