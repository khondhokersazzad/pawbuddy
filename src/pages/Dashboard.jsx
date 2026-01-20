import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router";
import { Plus, ShoppingBag, Heart, Settings } from "lucide-react";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [listings, setListings] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch user's listings
  useEffect(() => {
    if (!user?.email) return;

    fetch(`https://pawbuddy-five.vercel.app/my-services?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setListings(data || []);
      })
      .catch((err) => console.log(err));
  }, [user?.email]);

  // Fetch user's orders
  useEffect(() => {
    if (!user?.email) return;

    fetch(`https://pawbuddy-five.vercel.app/orders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [user?.email]);

  // Calculate stats
  const totalListings = listings.length;
  const totalOrders = orders.length;
  const totalSpent = orders.reduce((sum, order) => {
    return sum + parseFloat(order.price || 0) * parseInt(order.quantity || 1);
  }, 0);

  // Get category breakdown for listings
  const categoryStats = listings.reduce((acc, listing) => {
    const category = listing.category || "Other";
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  // Get most common location
  const userLocation =
    listings.length > 0
      ? listings[0].location || "Not specified"
      : "Not specified";

  // Recent listings (last 3)
  const recentListings = listings.slice(-3).reverse();

  // Recent orders (last 3)
  const recentOrders = orders.slice(-3).reverse();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-amber-50 to-rose-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
          <p className="mt-4 text-orange-600 dark:text-orange-400">
            Loading your dashboard...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-rose-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Header */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 mb-8 border border-orange-100 dark:border-slate-700">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
              <img
                src={user?.photoURL || "https://via.placeholder.com/60"}
                alt="Profile"
                className="w-16 h-16 rounded-full ring-4 ring-orange-200 dark:ring-orange-600"
              />
              <div className="absolute -top-1 -right-1 text-2xl">🐾</div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-orange-800 dark:text-orange-300">
                Welcome back, {user?.displayName || "Pet Lover"}! 🌟
              </h1>
              <p className="text-orange-600 dark:text-orange-400">
                Your PawBuddy journey at a glance
              </p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">🐕</div>
              <div className="text-2xl font-bold text-blue-800 dark:text-blue-200">
                {totalListings}
              </div>
              <div className="text-sm text-blue-600 dark:text-blue-300">
                My Listings
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">🛒</div>
              <div className="text-2xl font-bold text-green-800 dark:text-green-200">
                {totalOrders}
              </div>
              <div className="text-sm text-green-600 dark:text-green-300">
                Orders Placed
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">📍</div>
              <div className="text-lg font-bold text-purple-800 dark:text-purple-200">
                {userLocation}
              </div>
              <div className="text-sm text-purple-600 dark:text-purple-300">
                Active Location
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* My Listings Section */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 border border-orange-100 dark:border-slate-700">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-orange-800 dark:text-orange-300 flex items-center gap-2">
                <span className="text-2xl">📋</span>
                My Listings
              </h2>
              <Link
                to="/add-listing"
                className="flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors duration-200"
              >
                <Plus size={16} />
                Add New
              </Link>
            </div>

            {totalListings > 0 ? (
              <>
                {/* Category Breakdown */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(categoryStats).map(([category, count]) => (
                    <div
                      key={category}
                      className="bg-orange-50 dark:bg-slate-700 rounded-lg p-3"
                    >
                      <div className="text-lg font-semibold text-orange-800 dark:text-orange-300">
                        {count}
                      </div>
                      <div className="text-sm text-orange-600 dark:text-orange-400">
                        {category}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Recent Listings */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-orange-700 dark:text-orange-400">
                    Recent Listings:
                  </h3>
                  {recentListings.map((listing, index) => (
                    <div
                      key={listing._id || index}
                      className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-slate-700 rounded-lg"
                    >
                      <img
                        src={listing.image || "https://via.placeholder.com/50"}
                        alt={listing.name}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <div className="font-medium text-orange-800 dark:text-orange-200">
                          {listing.name}
                        </div>
                        <div className="text-sm text-orange-600 dark:text-orange-400">
                          {listing.category} • {listing.location}
                        </div>
                      </div>
                      <div className="text-orange-700 dark:text-orange-300 font-semibold">
                        {listing.price === "0" ? "Free" : `৳${listing.price}`}
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  to="/my-listing"
                  className="block text-center mt-4 text-orange-600 dark:text-orange-400 hover:text-orange-800 dark:hover:text-orange-200 font-medium"
                >
                  👀 View All Listings →
                </Link>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="text-6xl mb-4">🌟</div>
                <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-300 mb-2">
                  Ready to help a pet find a home?
                </h3>
                <p className="text-orange-600 dark:text-orange-400 mb-6">
                  Share a pet's story and help them find loving families
                </p>
                <div className="bg-orange-50 dark:bg-slate-700 rounded-lg p-4 mb-4">
                  <div className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                    <div>📸 Share a pet's story</div>
                    <div>💝 Help them find loving families</div>
                    <div>🏆 Join our community of pet lovers</div>
                  </div>
                </div>
                <Link
                  to="/add-listing"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors duration-200"
                >
                  <Plus size={20} />
                  Add Your First Listing
                </Link>
              </div>
            )}
          </div>

          {/* Orders Section */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 border border-orange-100 dark:border-slate-700">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-orange-800 dark:text-orange-300 flex items-center gap-2">
                <span className="text-2xl">🛍️</span>
                Order Activity
              </h2>
              <Link
                to="/all-products"
                className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors duration-200"
              >
                <ShoppingBag size={16} />
                Shop Now
              </Link>
            </div>

            {totalOrders > 0 ? (
              <>
                {/* Order Stats */}
                <div className="bg-green-50 dark:bg-slate-700 rounded-lg p-4 mb-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-2xl font-bold text-green-800 dark:text-green-200">
                        ৳{totalSpent.toLocaleString()}
                      </div>
                      <div className="text-sm text-green-600 dark:text-green-400">
                        Total Spent
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-green-800 dark:text-green-200">
                        {totalOrders}
                      </div>
                      <div className="text-sm text-green-600 dark:text-green-400">
                        Orders Placed
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Orders */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-orange-700 dark:text-orange-400">
                    Recent Orders:
                  </h3>
                  {recentOrders.map((order, index) => (
                    <div
                      key={order._id || index}
                      className="p-4 bg-green-50 dark:bg-slate-700 rounded-lg border-l-4 border-green-400"
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="font-medium text-green-800 dark:text-green-200">
                            {order.listingName}
                          </div>
                          <div className="text-sm text-green-600 dark:text-green-400 mt-1">
                            📅 {order.date} • 📍 {order.address}
                          </div>
                          <div className="text-sm text-green-600 dark:text-green-400">
                            📱 {order.phone}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-green-800 dark:text-green-200">
                            ৳{order.price}
                          </div>
                          <div className="text-sm text-green-600 dark:text-green-400">
                            Qty: {order.quantity}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4 mt-6">
                  <Link
                    to="/my-orders"
                    className="flex-1 text-center py-2 text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-200 font-medium"
                  >
                    📄 View All Orders →
                  </Link>
                </div>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="text-6xl mb-4">🛒</div>
                <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-300 mb-2">
                  Discover amazing pet supplies
                </h3>
                <p className="text-orange-600 dark:text-orange-400 mb-6">
                  Everything your furry friends need to stay happy and healthy
                </p>
                <div className="bg-green-50 dark:bg-slate-700 rounded-lg p-4 mb-6">
                  <div className="text-sm text-green-700 dark:text-green-300 space-y-2">
                    <div>🍖 Premium Pet Food</div>
                    <div>🎾 Interactive Toys & Accessories</div>
                    <div>🧴 Grooming & Care Products</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Link
                    to="/all-products"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors duration-200"
                  >
                    <ShoppingBag size={20} />
                    Start Shopping
                  </Link>
                  <Link
                    to="/category/pets"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors duration-200"
                  >
                    <Heart size={20} />
                    Browse Pets
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions Panel */}
        <div className="mt-8 bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 border border-orange-100 dark:border-slate-700">
          <h2 className="text-xl font-bold text-orange-800 dark:text-orange-300 mb-6 flex items-center gap-2">
            <span className="text-2xl">⚡</span>
            Quick Actions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Link
              to="/add-listing"
              className="flex flex-col items-center gap-3 p-6 bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900 dark:to-orange-800 rounded-xl hover:shadow-lg transition-all duration-200 group"
            >
              <div className="text-4xl group-hover:scale-110 transition-transform duration-200">
                🐕
              </div>
              <div className="text-center">
                <div className="font-semibold text-orange-800 dark:text-orange-200">
                  Add Pet Listing
                </div>
                <div className="text-sm text-orange-600 dark:text-orange-400">
                  Help pets find homes
                </div>
              </div>
            </Link>

            <Link
              to="/all-products"
              className="flex flex-col items-center gap-3 p-6 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 rounded-xl hover:shadow-lg transition-all duration-200 group"
            >
              <div className="text-4xl group-hover:scale-110 transition-transform duration-200">
                🛒
              </div>
              <div className="text-center">
                <div className="font-semibold text-green-800 dark:text-green-200">
                  Browse Products
                </div>
                <div className="text-sm text-green-600 dark:text-green-400">
                  Pet supplies & food
                </div>
              </div>
            </Link>

            <Link
              to="/category/pets"
              className="flex flex-col items-center gap-3 p-6 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-xl hover:shadow-lg transition-all duration-200 group"
            >
              <div className="text-4xl group-hover:scale-110 transition-transform duration-200">
                ❤️
              </div>
              <div className="text-center">
                <div className="font-semibold text-blue-800 dark:text-blue-200">
                  Find Pets
                </div>
                <div className="text-sm text-blue-600 dark:text-blue-400">
                  Adopt your companion
                </div>
              </div>
            </Link>

            <Link
              to="/profile"
              className="flex flex-col items-center gap-3 p-6 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 rounded-xl hover:shadow-lg transition-all duration-200 group"
            >
              <div className="text-4xl group-hover:scale-110 transition-transform duration-200">
                ⚙️
              </div>
              <div className="text-center">
                <div className="font-semibold text-purple-800 dark:text-purple-200">
                  My Profile
                </div>
                <div className="text-sm text-purple-600 dark:text-purple-400">
                  Account settings
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
