function Sidebar() {
    return (
      <aside className="w-full lg:w-64 flex-shrink-0 border p-4 mt-4 lg:mt-0">
        {/* Grow your newsletter */}
        <div className="mb-6">
          <h3 className="font-bold mb-2">Grow Your Newsletter</h3>
          <p className="text-sm mb-2">
            Every week we share resources for newsletter creators and recommended
            newsletters.
          </p>
          <input
            type="email"
            placeholder="Your Email"
            className="border w-full p-2 rounded mb-2"
          />
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Subscribe
          </button>
        </div>
        {/* Advertise on InboxReads */}
        <div>
          <h3 className="text-sm font-bold mb-1">Advertise on InboxReads</h3>
          <p className="text-xs text-gray-600 mb-2">
            Promote your newsletter or product to the InboxReads audience.
          </p>
          <button className="border border-blue-600 text-blue-600 w-full py-1 rounded hover:bg-blue-50">
            Learn More
          </button>
        </div>
      </aside>
    );
  }

  export default Sidebar;