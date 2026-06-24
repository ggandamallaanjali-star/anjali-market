import { Link } from 'react-router-dom'

const products = [
  { id: 1, name: 'Fresh Spinach', farmer: 'Ravi Kumar', location: 'Medak', price: '₹40/kg', category: 'Vegetables', organic: true, emoji: '🥬' },
  { id: 2, name: 'Tomatoes', farmer: 'Sunita Devi', location: 'Nizamabad', price: '₹35/kg', category: 'Vegetables', organic: false, emoji: '🍅' },
  { id: 3, name: 'Carrots', farmer: 'Gopalan Farm', location: 'Adilabad', price: '₹55/kg', category: 'Vegetables', organic: true, emoji: '🥕' },
  { id: 4, name: 'Buffalo Milk', farmer: 'Laxmi Dairy', location: 'Karimnagar', price: '₹70/L', category: 'Dairy', organic: false, emoji: '🥛' },
  { id: 5, name: 'Mangoes', farmer: 'Reddy Farms', location: 'Nalgonda', price: '₹120/kg', category: 'Fruits', organic: true, emoji: '🥭' },
  { id: 6, name: 'Brown Rice', farmer: 'Krishna Rao', location: 'Warangal', price: '₹80/kg', category: 'Grains', organic: true, emoji: '🌾' },
]

const farmers = [
  { id: 1, name: 'Ravi Kumar', location: 'Medak', crops: 'Leafy Vegetables, Grains', rating: 4.8, orders: 132, initials: 'RK' },
  { id: 2, name: 'Sunita Devi', location: 'Nizamabad', crops: 'Tomatoes, Fruits', rating: 4.6, orders: 89, initials: 'SD' },
  { id: 3, name: 'Laxmi Dairy', location: 'Karimnagar', crops: 'Dairy Products', rating: 4.9, orders: 310, initials: 'LD' },
]

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-green-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Fresh from the Farm to Your Kitchen</h1>
        <p className="text-green-100 text-lg mb-8 max-w-xl mx-auto">
          Buy fresh vegetables, fruits, dairy and grains directly from verified local farmers. No middlemen. Real freshness.
        </p>
        <div className="flex gap-4 justify-center">
          <Link to="/products" className="bg-white text-green-700 px-6 py-3 rounded-full font-semibold hover:bg-green-100 transition">
            Shop Now
          </Link>
          <Link to="/register" className="border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition">
            Join as Farmer
          </Link>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-green-800 text-white py-8 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div><div className="text-3xl font-bold">1,240</div><div className="text-green-300 text-sm">Farmers</div></div>
          <div><div className="text-3xl font-bold">+34%</div><div className="text-green-300 text-sm">Income Increase</div></div>
          <div><div className="text-3xl font-bold">98%</div><div className="text-green-300 text-sm">Fulfilment Rate</div></div>
          <div><div className="text-3xl font-bold">12</div><div className="text-green-300 text-sm">Districts</div></div>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Fresh Today</h2>
          <Link to="/products" className="text-green-600 hover:underline text-sm">View all →</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition">
              <div className="bg-green-50 h-20 flex items-center justify-center text-4xl">
                {product.emoji}
              </div>
              <div className="p-3">
                <div className="font-semibold text-sm text-gray-800">{product.name}</div>
                <div className="text-xs text-gray-500 mb-2">{product.farmer}</div>
                <div className="flex items-center justify-between">
                  <span className="text-green-700 font-bold text-sm">{product.price}</span>
                  {product.organic && (
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Organic</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Farmers Section */}
      <div className="bg-gray-50 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Verified Farmers Near You</h2>
            <Link to="/farmers" className="text-green-600 hover:underline text-sm">Browse all →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {farmers.map(farmer => (
              <div key={farmer.id} className="bg-white rounded-xl border border-gray-200 p-4 flex gap-3 hover:shadow-md transition">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold flex-shrink-0">
                  {farmer.initials}
                </div>
                <div>
                  <div className="font-semibold text-gray-800">{farmer.name}</div>
                  <div className="text-xs text-gray-500">📍 {farmer.location}</div>
                  <div className="text-xs text-gray-600 mt-1">{farmer.crops}</div>
                  <div className="text-xs text-amber-600 mt-1">⭐ {farmer.rating} · {farmer.orders} orders</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home