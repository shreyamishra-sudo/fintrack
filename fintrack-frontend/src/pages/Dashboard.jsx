function Dashboard() {

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">

      <div className="w-64 bg-blue-600 text-white p-5">
        <h1 className="text-2xl font-bold mb-6">FinTrack</h1>

        <ul className="space-y-3">
          <li className="hover:underline cursor-pointer">Dashboard</li>
          <li className="hover:underline cursor-pointer">Categories</li>
          <li className="hover:underline cursor-pointer">Expenses</li>
          <li className="hover:underline cursor-pointer">Budgets</li>
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