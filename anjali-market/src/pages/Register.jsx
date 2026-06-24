import { useState } from 'react'
import { Link } from 'react-router-dom'

function Register() {
  const [role, setRole] = useState('consumer')
  const [form, setForm] = useState({ name: '', email: '', password: '', location: '', crops: '', method: 'Organic' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-xl border border-gray-200 p-8 text-center max-w-sm w-full">
          <div className="text-5xl mb-4">🎉</div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Registration Successful!</h2>
          <p className="text-gray-500 text-sm mb-4">
            {role === 'farmer'
              ? 'Your farmer account is under review. We will verify and approve it shortly.'
              : 'Welcome to Anjali Market! Start shopping fresh produce.'}
          </p>
          <Link to="/" className="bg-green-600 text-white px-6 py-2 rounded-lg text-sm hover:bg-green-700 transition">
            Go to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="bg-white rounded-xl border border-gray-200 p-8 w-full max-w-md">

        <div className="text-center mb-6">
          <div className="text-4xl mb-2">🌿</div>
          <h1 className="text-2xl font-bold text-gray-800">Create Account</h1>
          <p className="text-gray-500 text-sm mt-1">Join Anjali Market today</p>
        </div>

        {/* Role Toggle */}
        <div className="flex rounded-lg border border-gray-200 overflow-hidden mb-6">
          <button
            onClick={() => setRole('consumer')}
            className={`flex-1 py-2 text-sm font-medium transition ${
              role === 'consumer' ? 'bg-green-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            🛒 Consumer
          </button>
          <button
            onClick={() => setRole('farmer')}
            className={`flex-1 py-2 text-sm font-medium transition ${
              role === 'farmer' ? 'bg-green-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            🌾 Farmer
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              placeholder="••••••••"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
            <input
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
              required
              placeholder="Your city or district"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Farmer only fields */}
          {role === 'farmer' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Crops You Grow</label>
                <input
                  type="text"
                  name="crops"
                  value={form.crops}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Tomatoes, Rice, Mangoes"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Farming Method</label>
                <select
                  name="method"
                  value={form.method}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                >
                  <option value="Organic">Organic</option>
                  <option value="Conventional">Conventional</option>
                  <option value="Mixed">Mixed</option>
                </select>
              </div>
            </>
          )}

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2.5 rounded-lg font-medium hover:bg-green-700 transition"
          >
            {role === 'farmer' ? 'Register as Farmer' : 'Create Account'}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-green-600 hover:underline font-medium">
            Login here
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Register