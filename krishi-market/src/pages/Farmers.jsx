const farmers = [
  { id: 1, name: 'Ravi Kumar', location: 'Medak', crops: 'Leafy Vegetables, Grains', method: 'Organic', rating: 4.8, orders: 132, initials: 'RK', verified: true, about: 'Farming for 15 years using traditional organic methods.' },
  { id: 2, name: 'Sunita Devi', location: 'Nizamabad', crops: 'Tomatoes, Fruits', method: 'Conventional', rating: 4.6, orders: 89, initials: 'SD', verified: true, about: 'Specializes in seasonal fruits and vegetables.' },
  { id: 3, name: 'Laxmi Dairy', location: 'Karimnagar', crops: 'Dairy Products', method: 'Organic', rating: 4.9, orders: 310, initials: 'LD', verified: true, about: 'Fresh buffalo milk and dairy products delivered daily.' },
  { id: 4, name: 'Gopalan Farm', location: 'Adilabad', crops: 'Carrots, Beetroot', method: 'Organic', rating: 4.5, orders: 67, initials: 'GF', verified: true, about: 'Root vegetables grown in rich black soil of Adilabad.' },
  { id: 5, name: 'Reddy Farms', location: 'Nalgonda', crops: 'Mangoes, Bananas', method: 'Conventional', rating: 4.7, orders: 201, initials: 'RF', verified: true, about: 'Premium mango varieties and tropical fruits.' },
  { id: 6, name: 'Krishna Rao', location: 'Warangal', crops: 'Rice, Wheat, Millets', method: 'Organic', rating: 4.4, orders: 55, initials: 'KR', verified: false, about: 'Traditional grain farmer promoting millet cultivation.' },
]

function Farmers() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Our Farmers</h1>
      <p className="text-gray-500 mb-8">Verified local farmers ready to deliver fresh produce to you</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {farmers.map(farmer => (
          <div key={farmer.id} className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition">
            
            {/* Header */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold text-lg flex-shrink-0">
                {farmer.initials}
              </div>
              <div>
                <div className="font-semibold text-gray-800 flex items-center gap-2">
                  {farmer.name}
                  {farmer.verified && (
                    <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">✓ Verified</span>
                  )}
                </div>
                <div className="text-sm text-gray-500">📍 {farmer.location}</div>
              </div>
            </div>

            {/* About */}
            <p className="text-sm text-gray-600 mb-3">{farmer.about}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-3">
              {farmer.crops.split(', ').map(crop => (
                <span key={crop} className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full border border-green-200">
                  {crop}
                </span>
              ))}
              <span className={`text-xs px-2 py-0.5 rounded-full border ${
                farmer.method === 'Organic'
                  ? 'bg-green-100 text-green-700 border-green-300'
                  : 'bg-gray-100 text-gray-600 border-gray-300'
              }`}>
                {farmer.method}
              </span>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
              <div className="text-sm text-amber-600">⭐ {farmer.rating} rating</div>
              <div className="text-sm text-gray-500">{farmer.orders} orders completed</div>
            </div>

            {/* Button */}
            <button className="mt-3 w-full bg-green-600 text-white py-2 rounded-lg text-sm hover:bg-green-700 transition">
              View Products
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Farmers