
import React from "react";

function NewsCard({ article }) {

  return (
    <div className="bg-white rounded-lg shadow-md p-4 transition-transform hover:scale-105 hover:shadow-lg hover:cursor-pointer">
      {article.image_url ? (
        <img
          src={article.image_url}
          alt={article.title}
          className="w-full h-48 object-cover rounded mb-2"
        />
      ) : (

        <img
        src={article.image_url || "default.jpg"} 
        alt={article.title || "Default Image"}
        className="w-full h-48 object-cover rounded mb-2"
      />
      
      )}

      <h2 className="text-lg font-bold text-gray-800 mb-2">{article.title}</h2>

      {/* Article Desc*/}
      {/* <p className="text-gray-600 mb-4">{article.description}</p> */}

      <a
        href={article.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline hover:text-blue-700"
      >
        Read more
      </a>
    </div>
  );
}

export default NewsCard;


