import './App.css';
import Header from "./Header"
import CategoryFilter from "./CategoryFilter"
import NewsletterGrid from "./NewsletterGrid"
import Sidebar from "./Sidebar"
import React from 'react';

function App() {
  return (
    <div className="font-sans text-gray-900 min-h-screen">
      {/* Header */}
      <Header />

      <main className="max-w-7xl mx-auto p-4">
        {/* Title */}
        <div className="mb-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-2">
            Find The Best Email Newsletters For Any Topic
          </h1>
          <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1 mb-4">
            <li>See newsletter subscriber counts, open & click rates, tools, and more</li>
            <li>Discover similar newsletters, competitors, and potential partners</li>
            <li>Contact newsletter operators directly to start working together</li>
          </ul>
          {/* Category Filters */}
          <CategoryFilter />
        </div>

        {/* Content area: Left side "Popular" and Right side Sidebar */}
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-grow">
            <h2 className="text-xl font-bold mb-2">🔥 Popular Newsletters →</h2>
            <p className="text-sm text-gray-600 mb-4">
              The best email newsletters covering a variety of topics.
            </p>
            <NewsletterGrid />
          </div>

          <Sidebar />
        </div>
      </main>
    </div>
  );
}

export default App;
