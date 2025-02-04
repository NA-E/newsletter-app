function CategoryFilter() {
    // Hardcoded categories for demo. Could also read from an API or your CSV data.
    const categories = [
      'Tech',
      'Business',
      'Development',
      'Startup',
      'Marketing',
      'News',
      'Culture',
      'Self Improvement',
      'Design',
      'Politics',
      'Web Dev',
      'Sports',
      'Entrepreneurship',
      'Art',
      'Science',
      'Travel',
      'Health',
      'Finance',
      'Entertainment',
      'Books',
      'Writing',
    ];
  
    return (
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <div
            key={cat}
            className="text-xs bg-gray-100 rounded-full px-3 py-1 cursor-pointer hover:bg-gray-200"
          >
            {cat}
          </div>
        ))}
      </div>
    );
  }

  export default CategoryFilter;
