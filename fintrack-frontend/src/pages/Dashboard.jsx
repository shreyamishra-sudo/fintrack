import { Link } from "react-router-dom";

function Dashboard() {

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
      <div className="w-64 bg-blue-600 text-white p-5">
        <h1 className="text-2xl font-bold mb-6">FinTrack</h1>

        <ul className="space-y-3">
          <li>
            <Link to="/dashboard" className="hover:underline">Dashboard</Link>
          </li>
          <li>
            <Link to="/categories" className="hover:underline">Categories</Link>
          </li>
        </ul>
      </div>

      <div className="flex-1 p-8">
        <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
        <p>Welcome to FinTrack 🚀</p>

        <button
          onClick={handleLogout}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

    </div>
  );
}

export default Dashboard;