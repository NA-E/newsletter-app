function Header() {
    return (
      <header className="w-full border-b p-4 flex items-center justify-between">
        {/* Left side brand / logo */}
        <div className="flex items-center space-x-2">
          {/* Example brand/logo text */}
          <div className="text-xl font-bold">InboxReads</div>
        </div>
  
        {/* Right side nav / search / actions */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="border rounded-full px-3 py-1"
            />
            {/* Could add a search icon if desired */}
          </div>
          <button className="rounded-full border px-4 py-1 hover:bg-gray-100">
            Submit
          </button>
          <button className="rounded-full border px-4 py-1 hover:bg-gray-100">
            Login
          </button>
          <button className="rounded-full bg-blue-600 text-white px-4 py-1 hover:bg-blue-700">
            Join
          </button>
        </div>
      </header>
    );
  }

  export default Header;