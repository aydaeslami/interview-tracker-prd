import { useState } from 'react';


function Login() {
const [message, setMessage] = useState('');
const [username, setName] = useState('');
async function handleSubmit(event) {
  event.preventDefault();

  const response = await fetch('http://localhost:4000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: username
    })
  });

  const data = await response.json();

  setMessage(data.message);
}

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">

        <h1 className="mb-2 text-center text-3xl font-bold text-blue-600">
          JobTrack
        </h1>

        <p className="mb-8 text-center text-gray-500">
          Your job search, organised.
        </p>

        <h2 className="mb-2 text-2xl font-semibold">
          Welcome Back
        </h2>

        <p className="mb-6 text-gray-500">
          Please login to your account.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium">
              Email Address
            </label>

            <input
              type="email"
              value={username}
                onChange={(e) => setName(e.target.value)}
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Login
          </button>

        </form>
        {message && (
  <p className="mt-4 text-center font-semibold text-green-600">
    {message}
  </p>
)}
      </div>
    </main>
  );
}


export default Login;
