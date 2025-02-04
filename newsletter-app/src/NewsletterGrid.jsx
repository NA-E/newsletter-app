import NewsletterCard from "./NewsletterCard"
import React from 'react';

function NewsletterGrid() {
    const [newsletters, setNewsletters] = React.useState([]);
  
    React.useEffect(() => {
      fetch('/files/all_newsletters.csv') // <--- Pass the URL directly here
        .then((res) => res.text())
        .then((csvData) => {
          const lines = csvData.trim().split('\n');
          // Grab the header row if needed, or ignore it:
          // const headerRow = lines[0].split(',');
          // For this example, skip the header row entirely:
          const dataLines = lines.slice(1);
  
          const items = dataLines.map((line) => {
            // The CSV has fields: Category, Name, Description, Image URL, Landing Page URL
            const [category, name, description, imageUrl, landingUrl] =
              line.split(',');
  
            return {
              category: category?.trim(),
              name: name?.trim(),
              description: description?.trim(),
              imageUrl: imageUrl?.trim(),
              landingUrl: landingUrl?.trim(),
            };
          });
  
          setNewsletters(items);
        })
        .catch((err) => {
          console.error('Error fetching/parsing CSV:', err);
        });
    }, []);
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {newsletters.map((newsletter, idx) => (
          <NewsletterCard key={idx} newsletter={newsletter} />
        ))}
      </div>
    );
  }
  
  export default NewsletterGrid;