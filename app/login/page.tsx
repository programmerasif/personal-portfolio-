"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { BadgeCheck } from "lucide-react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`https://portfolio-backend-theta-sepia.vercel.app/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        document.cookie = `userEmail=${data.email}; path=/`;
        document.cookie = `userRole=${data.role}; path=/`;

        localStorage.setItem("userEmail", data.email);
        localStorage.setItem("userRole", data.role);

        setMessage(data.message);
        router.push("/");
      } else {
        setMessage(data.message || "Login failed");
      }
    } catch (error) {
      setMessage("Login failed due to a network error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="max-w-lg w-full p-8   drop-shadow-2xl bg-gray-700 rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-6">
          Welcome, Asif!
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            disabled={loading}
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
          >
            {loading ? "Loading..." : "Login"}
          </button>
        </form>

        {message && (
          <div className="mt-4 flex gap-x-2 items-center text-gray-700">
            <p>{message}</p>
            <BadgeCheck strokeWidth={1} />
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;