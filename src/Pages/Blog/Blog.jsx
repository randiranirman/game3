import React, { useState, useEffect } from 'react';

const Blog = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://gaming-news2.p.rapidapi.com/news?locale=en_KE&country=en&language=en&timezone=%2B01%3A00', {
        method: 'GET',
        headers: {
          'x-rapidapi-key': 'b77e384fb4msh0a748b4dca067e1p1d0e7cjsne5c2e71f2326',
          'x-rapidapi-host': 'gaming-news2.p.rapidapi.com'
        }
      });
      const data = await response.json();
      setArticles(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>This is the blog page</h1>
      <div>
        {articles.map((article, index) => (
          <div key={index}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <img src={article.image} alt={article.title} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Blog;
