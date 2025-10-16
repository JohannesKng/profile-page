// ----------------------------
// Project: Profile Page - Personal Data (React + Tailwind)
// Framework: React (Vite) + Tailwind CSS
// ----------------------------

import React, { useEffect, useState } from 'react'

export default function App() {
  const [apiUser, setApiUser] = useState(null)

  async function fetchRandomUser() {
    try {
      const res = await fetch('https://randomuser.me/api/?nat=us,gb,ca,au')
      const data = await res.json()
      setApiUser(data.results[0])
    } catch (err) {
      console.error('Error fetching random user:', err)
    }
  }

  useEffect(() => {
    fetchRandomUser()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-violet-50 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full grid md:grid-cols-3 gap-6 items-center">

        {/* Left Card */}
        <aside className="md:col-span-1 bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/40 flex flex-col items-center text-center fade-in">
          <div className="w-40 h-40 rounded-full overflow-hidden shadow-md ring-4 ring-white/60">
            {apiUser ? (
              <img src={apiUser.picture.large} alt="avatar" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-gray-200 animate-pulse" />
            )}
          </div>
          <h2 className="mt-4 text-xl font-semibold text-slate-800">Johannes Kristian Nainggolan</h2>
          <p className="text-sm text-slate-500">Front-End Developer • Technology Enthusiast</p>

          <div className="mt-4 w-full flex gap-3">
            <button onClick={fetchRandomUser} className="flex-1 py-2 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition">Refresh Random Data</button>
            <a href="#profile" className="py-2 px-4 rounded-full border border-indigo-600 text-indigo-600 hover:bg-indigo-50">Details</a>
          </div>

          {/* Social Links */}
          <div className="mt-6 flex flex-col gap-2 w-full">
            <a href="https://github.com/johanneskristian" target="_blank" rel="noopener noreferrer" className="w-full py-2 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition">GitHub</a>
            <a href="https://linkedin.com/in/johanneskristian" target="_blank" rel="noopener noreferrer" className="w-full py-2 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition">LinkedIn</a>
            <a href="https://instagram.com/johanneskristian" target="_blank" rel="noopener noreferrer" className="w-full py-2 rounded-full bg-pink-600 text-white hover:bg-pink-700 transition">Instagram</a>
          </div>
        </aside>

        {/* Right Card */}
        <main id="profile" className="md:col-span-2 bg-white/75 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/40 fade-in">
          <h3 className="text-lg font-semibold text-slate-800 mb-3">Personal Information</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-gradient-to-r from-white to-slate-50 border border-white/30">
              <div className="text-xs text-slate-500">Full Name</div>
              <div className="mt-1 font-medium text-slate-700">Johannes Kristian Nainggolan</div>
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-r from-white to-slate-50 border border-white/30">
              <div className="text-xs text-slate-500">Domicile</div>
              <div className="mt-1 font-medium text-slate-700">Sleman, Yogyakarta, Indonesia</div>
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-r from-white to-slate-50 border border-white/30">
              <div className="text-xs text-slate-500">Email</div>
              <div className="mt-1 font-medium text-slate-700">johanneskristian@example.com</div>
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-r from-white to-slate-50 border border-white/30">
              <div className="text-xs text-slate-500">Phone</div>
              <div className="mt-1 font-medium text-slate-700">+62 812-3456-7890</div>
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-r from-white to-slate-50 border border-white/30">
              <div className="text-xs text-slate-500">Profession</div>
              <div className="mt-1 font-medium text-slate-700">Front-End Developer</div>
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-r from-white to-slate-50 border border-white/30">
              <div className="text-xs text-slate-500">Languages</div>
              <div className="mt-1 font-medium text-slate-700">Indonesian, English</div>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-sm font-semibold text-slate-700">About Me</h4>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              I’m a passionate Front-End Developer based in Sleman, Yogyakarta. I enjoy transforming design concepts into functional, user-friendly web interfaces. With a focus on React and modern front-end tools, I aim to create clean, responsive, and accessible experiences.
            </p>
          </div>

          <div className="mt-6">
            <h4 className="text-sm font-semibold text-slate-700">Random API Data</h4>
            <p className="text-sm text-slate-600 mt-1">(Fetched dynamically from RandomUser API)</p>
            {apiUser && (
              <div className="mt-3 p-4 rounded-xl bg-gradient-to-r from-indigo-50 to-white border border-white/40">
                <div className="text-xs text-slate-500">API Username</div>
                <div className="font-mono text-sm text-slate-700">{apiUser.login.username}</div>
                <div className="mt-2 text-xs text-slate-500">Country</div>
                <div className="font-medium text-slate-700">{apiUser.location.country}</div>
              </div>
            )}
          </div>

        </main>
      </div>

      <div className="fixed bottom-4 left-4 text-xs text-slate-500">© 2025 Johannes Kristian Nainggolan • Built with ❤️ using React & Tailwind</div>
    </div>
  )
}
