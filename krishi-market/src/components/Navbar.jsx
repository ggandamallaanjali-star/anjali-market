import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-green-700 text-white px-6 py-4 flex items-center justify-between shadow-md">
      <Link to="/" className="text-2xl font-bold tracking-tight">
        🌿 Anjali Market
      </Link>
      <div className="flex gap-6 text-sm font-medium">
        <Link to="/" className="hover:text-green-200 transition">Home</Link>
        <Link to="/products" className="hover:text-green-200 transition">Products</Link>
        <Link to="/farmers" className="hover:text-green-200 transition">Farmers</Link>
        <Link to="/orders" className="hover:text-green-200 transition">Orders</Link>
      </div>
      <div className="flex gap-3">
        <Link to="/login" className="bg-white text-green-700 px-4 py-1.5 rounded-full text-sm font-medium hover:bg-green-100 transition">
          Login
        </Link>
        <Link to="/register" className="bg-green-500 text-white px-4 py-1.5 rounded-full text-sm font-medium hover:bg-green-400 transition">
          Register
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
