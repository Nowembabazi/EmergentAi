import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dashboard, setDashboard] = useState(""); // State to track the selected dashboard
  const [isLoading, setIsLoading] = useState(false); // State to track loading status
  const navigate = useNavigate(); // Initialize the navigate function

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state to true when login starts

    // Simulate a login delay for demonstration purposes
    setTimeout(() => {
      console.log("Email:", email, "Password:", password, "Dashboard:", dashboard);

      // Navigate based on the selected dashboard
      if (dashboard === "doctor") {
        navigate("/doctor");
      } else if (dashboard === "patient") {
        navigate("/patient");
      } else if (dashboard === "faculty") {
        navigate("/faculty");
      } else if (dashboard === "lab") {
        navigate("/lab");
      } else if (dashboard === "facility-card") {
        navigate("/facility-card");
      } else {
        alert("Please select a dashboard.");
      }

      setIsLoading(false); // Reset loading state after login
    }, 2000); // Simulating a 2-second delay for login process
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-500">
      <div className="bg-white p-8 rounded-lg mb-12 mt-12 shadow-lg max-w-md w-full">
        <div className="text-center mb-8">
          <img src="logo_placeholder.png" alt="Emergent AI" className="mx-auto mb-4" />
          <h2 className="text-2xl font-semibold">Welcome back!</h2>
        </div>

        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
            />
            <div className="text-right mt-2">
              <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700">Choose Dashboard</label>
            <select
              value={dashboard}
              onChange={(e) => setDashboard(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            >
              <option value="" disabled>Select a dashboard</option>
              <option value="doctor">Doctor Dashboard</option>
              <option value="patient">Patient Dashboard</option>
              <option value="faculty">Faculty Dashboard</option>
              <option value="lab">Lab Dashboard</option>
              <option value="facility-card">Facilities Dashboard</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            disabled={isLoading} // Disable button while loading
          >
            {isLoading ? "Signing in..." : "Sign in"} {/* Show "Signing in..." when loading */}
          </button>
        </form>

        <div className="mt-6 text-center text-gray-600">OR</div>

        <button className="w-full mt-4 border border-gray-300 text-gray-700 py-2 rounded-lg flex items-center justify-center hover:bg-gray-100 transition">
          <img src="google_icon_placeholder.png" alt="Google" className="mr-2" />
          Continue with Google
        </button>

        <div className="text-center mt-4 text-gray-600">
          <p>Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign up</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
