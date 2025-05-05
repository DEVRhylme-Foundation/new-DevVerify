// Removed unused React import

function Navbar() {
  return (
    <nav className="bg-indigo-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Company Name */}
        <div className="text-3xl font-bold">
          DevRhylme Foundation
        </div>

        {/* Navigation Buttons */}
        <div className="space-x-4">
          <button className="hover:bg-indigo-700 px-3 py-2 rounded transition">
            <a href='https://www.devrhylme.org/about' target='_blank'>About Us</a>
          </button>
          <button className="hover:bg-indigo-700 px-3 py-2 rounded transition">
            <a href='https://www.devrhylme.org/contact' target='_blank'>Contact Us</a>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;