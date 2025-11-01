import React from 'react'

function WelcomeMenu() {
  return (
    <div>
<nav class="bg-white shadow px-4 py-3">
  <div class="container mx-auto flex justify-between items-center">

    <div class="text-xl font-bold text-gray-800">
      Employee
    </div>

   
    <div class="space-x-4">
      <a href="/login" class="text-gray-600 hover:text-gray-900">Login</a>
      <a href="/register" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Register</a>
    </div>
  </div>
</nav>

    </div>
  )
}

export default WelcomeMenu
