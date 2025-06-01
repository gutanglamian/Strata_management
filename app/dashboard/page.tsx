export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Stats Cards */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium text-gray-900">Total Buildings</h3>
          <p className="mt-2 text-3xl font-semibold text-indigo-600">12</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium text-gray-900">Active Customers</h3>
          <p className="mt-2 text-3xl font-semibold text-indigo-600">156</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium text-gray-900">Monthly Revenue</h3>
          <p className="mt-2 text-3xl font-semibold text-indigo-600">$24,500</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900">Recent Activity</h2>
          <div className="mt-4 space-y-4">
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">New customer registration</p>
                <p className="text-sm text-gray-500">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Maintenance request completed</p>
                <p className="text-sm text-gray-500">5 hours ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">New building added</p>
                <p className="text-sm text-gray-500">1 day ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 