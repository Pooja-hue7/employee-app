import React from 'react'
import { Link } from 'react-router-dom'

function WelcomeMenu() {
  return (
    <div>
<nav class="bg-white shadow px-4 py-3">
  <div class="container mx-auto flex justify-between items-center">

    <div class="text-xl font-bold text-gray-800">
      Employee
    </div>

   
    <div class="space-x-4">
      <Link to={'/login'} class="text-gray-600 hover:text-gray-900">Login</Link>
      <Link to={'/register'} class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Register</Link>
    </div>
  </div>
</nav>

    </div>
  )
}

export default WelcomeMenu
