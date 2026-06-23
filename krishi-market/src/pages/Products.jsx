import { useState } from 'react'

const allProducts = [
  { id: 1, name: 'Fresh Spinach', farmer: 'Ravi Kumar', location: 'Medak', price: '₹40/kg', category: 'Vegetables', organic: true, emoji: '🥬' },
  { id: 2, name: 'Tomatoes', farmer: 'Sunita Devi', location: 'Nizamabad', price: '₹35/kg', category: 'Vegetables', organic: false, emoji: '🍅' },
  { id: 3, name: 'Carrots', farmer: 'Gopalan Farm', location: 'Adilabad', price: '₹55/kg', category: 'Vegetables', organic: true, emoji: '🥕' },
  { id: 4, name: 'Buffalo Milk', farmer: 'Laxmi Dairy', location: 'Karimnagar', price: '₹70/L', category: 'Dairy', organic: false, emoji: '🥛' },
  { id: 5, name: 'Mangoes', farmer: 'Reddy Farms', location: 'Nalgonda', price: '₹120/kg', category: 'Fruits', organic: true, emoji: '🥭' },
  { id: 6, name: 'Brown Rice', farmer: 'Krishna Rao', location: 'Warangal', price: '₹80/kg', category: 'Grains', organic: true, emoji: '🌾' },
  { id: 7, name: 'Brinjal', farmer: 'Ravi Kumar', location: 'Medak', price: '₹30/kg', category: 'Vegetables', organic: false, emoji: '🍆' },
  { id: 8, name: 'Bananas', farmer: 'Reddy Farms', location: 'Nalgonda', price: '₹45/dozen', category: 'Fruits', organic: false, emoji: '🍌' },
  { id: 9, name: 'Curd', farmer: 'Laxmi Dairy', location: 'Karimnagar', price: '₹50/kg', category: 'Dairy', organic: false, emoji: '🍶' },
]

const categories = ['All', 'Vegetables', 'Fruits', 'Dairy', 'Grains']

function Products() {
  const [selected, setSelected] = useState('All')
  const [organicOnly, setOrganicOnly] = useState(false)
  const [cart, setCart] = useState([])

  const filtered = allProducts.filter(p => {
    if (selected !== 'All' && p.category !== selected) return false
    if (organicOnly && !p.organic) return false
    return true
  })

  const addToCart = (product) => {
    setCart([...cart, product])
    alert(`${product.name} added to cart!`)
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">All Products</h1>
      <p className="text-gray-500 mb-6">Fresh produce directly from local farmers</p>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-4">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition ${
              selected === cat
                ? 'bg-green-600 text-white border-green-600'
                : 'bg-white text-gray-600 border-gray-300 hover:border-green-400'
            }`}
          >
            {cat}
          </button>
        ))}
        <button
          onClick={() => setOrganicOnly(!organicOnly)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium border transition ${
            organicOnly
              ? 'bg-green-100 text-green-700 border-green-400'
              : 'bg-white text-gray-600 border-gray-300 hover:border-green-400'
          }`}
        >
          🌱 Organic Only
        </button>
      </div>

      {/* Cart count */}
      {cart.length > 0 && (
        <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-2 mb-6 text-green-700 text-sm">
          🛒 {cart.length} item(s) in cart
        </div>
      )}

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map(product => (
          <div key={product.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition">
            <div className="bg-green-50 h-24 flex items-center justify-center text-5xl">
              {product.emoji}
            </div>
            <div className="p-3">
              <div className="font-semibold text-gray-800">{product.name}</div>
              <div className="text-xs text-gray-500 mb-1">{product.farmer} · {product.location}</div>
              <div className="text-xs text-gray-400 mb-2">{product.category}</div>
              <div className="flex items-center justify-between">
                <span className="text-green-700 font-bold">{product.price}</span>
                {product.organic && (
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Organic</span>
                )}
              </div>
              <button
                onClick={() => addToCart(product)}
                className="mt-2 w-full bg-green-600 text-white py-1.5 rounded-lg text-sm hover:bg-green-700 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          <div className="text-5xl mb-4">🌱</div>
          <div>No products found for this filter.</div>
        </div>
      )}
    </div>
  )
}

export default Products