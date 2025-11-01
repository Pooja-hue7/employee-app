import React from 'react'

function Footer() {
  return (
    <div>
   <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left side */}
        <p className="text-sm">&copy; {new Date().getFullYear()} MyCompany. All rights reserved.</p>

        {/* Right side */}
        <div className="mt-4 md:mt-0 space-x-4">
          <a href="#" className="hover:text-gray-300">Privacy Policy</a>
          <a href="#" className="hover:text-gray-300">Terms of Service</a>
          <a href="#" className="hover:text-gray-300">Contact</a>
          <a href="#" className="hover:text-gray-300">About</a>

        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
