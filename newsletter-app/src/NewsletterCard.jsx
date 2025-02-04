function NewsletterCard({ newsletter }) {
    // newsletter = { name, description, imageUrl, landingUrl, category }
    return (
      <a
        href={newsletter.landingUrl || '#'}
        target="_blank"
        rel="noreferrer"
        className="block rounded-lg shadow-sm border hover:shadow-md overflow-hidden"
      >
        {/* top image */}
        <div className="w-full h-32 bg-gray-200 flex items-center justify-center">
          {newsletter.imageUrl ? (
            <img
              src={newsletter.imageUrl}
              alt={newsletter.name}
              className="object-contain h-full"
            />
          ) : (
            <span className="text-gray-600 text-sm">No Image</span>
          )}
        </div>
        {/* text content */}
        <div className="p-3">
          <h3 className="font-semibold mb-1 text-sm">{newsletter.name}</h3>
          <p className="text-xs text-gray-600 line-clamp-2">{newsletter.description}</p>
        </div>
      </a>
    );
  }

  export default NewsletterCard;