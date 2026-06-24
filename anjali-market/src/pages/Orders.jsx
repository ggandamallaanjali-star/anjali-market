const orders = [
  {
    id: 'KM-20482',
    date: 'Jun 23, 2026',
    status: 'Out for Delivery',
    statusColor: 'bg-blue-100 text-blue-700',
    items: [
      { name: 'Fresh Spinach 1kg', farmer: 'Ravi Kumar', price: '₹40' },
      { name: 'Tomatoes 2kg', farmer: 'Sunita Devi', price: '₹70' },
      { name: 'Buffalo Milk 1L', farmer: 'Laxmi Dairy', price: '₹70' },
    ],
    total: '₹180',
    steps: ['Ordered', 'Confirmed', 'Out for Delivery', 'Delivered'],
    currentStep: 2,
  },
  {
    id: 'KM-20401',
    date: 'Jun 20, 2026',
    status: 'Delivered',
    statusColor: 'bg-green-100 text-green-700',
    items: [
      { name: 'Mangoes 2kg', farmer: 'Reddy Farms', price: '₹240' },
      { name: 'Brown Rice 1kg', farmer: 'Krishna Rao', price: '₹80' },
    ],
    total: '₹320',
    steps: ['Ordered', 'Confirmed', 'Out for Delivery', 'Delivered'],
    currentStep: 3,
  },
  {
    id: 'KM-20389',
    date: 'Jun 18, 2026',
    status: 'Confirmed',
    statusColor: 'bg-amber-100 text-amber-700',
    items: [
      { name: 'Carrots 1kg', farmer: 'Gopalan Farm', price: '₹55' },
      { name: 'Curd 500g', farmer: 'Laxmi Dairy', price: '₹25' },
    ],
    total: '₹80',
    steps: ['Ordered', 'Confirmed', 'Out for Delivery', 'Delivered'],
    currentStep: 1,
  },
]

function Orders() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">My Orders</h1>
      <p className="text-gray-500 mb-8">Track your fresh produce deliveries</p>

      <div className="space-y-6">
        {orders.map(order => (
          <div key={order.id} className="bg-white rounded-xl border border-gray-200 p-6">
            
            {/* Order Header */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="font-semibold text-gray-800">Order #{order.id}</span>
                <span className="text-gray-400 text-sm ml-3">{order.date}</span>
              </div>
              <span className={`text-xs px-3 py-1 rounded-full font-medium ${order.statusColor}`}>
                {order.status}
              </span>
            </div>

            {/* Progress Steps */}
            <div className="flex items-center mb-5">
              {order.steps.map((step, index) => (
                <div key={step} className="flex items-center flex-1">
                  <div className="flex flex-col items-center">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium ${
                      index <= order.currentStep
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-100 text-gray-400 border border-gray-300'
                    }`}>
                      {index <= order.currentStep ? '✓' : index + 1}
                    </div>
                    <span className="text-xs text-gray-500 mt-1 text-center w-16">{step}</span>
                  </div>
                  {index < order.steps.length - 1 && (
                    <div className={`flex-1 h-0.5 mb-4 ${
                      index < order.currentStep ? 'bg-green-500' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>

            {/* Order Items */}
            <div className="border-t border-gray-100 pt-4 space-y-2">
              {order.items.map((item, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    <span className="text-gray-700">{item.name}</span>
                    <span className="text-gray-400">— {item.farmer}</span>
                  </div>
                  <span className="text-gray-600">{item.price}</span>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
              <span className="font-medium text-gray-700">Total</span>
              <span className="font-bold text-green-700 text-lg">{order.total}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders