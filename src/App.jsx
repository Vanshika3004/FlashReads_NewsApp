
import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import NewsCard from "./components/NewsCard";
import Footer from "./components/Footer";

function App() {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState("technology");
  const [loading, setLoading] = useState(false);

  const categories = ["Technology", "Business", "Sports", "Entertainment"];
  
  useEffect(() => {
        const fetchNews = async () => {
          try {
            const response = await axios.get(
              "https://newsdata.io/api/1/news",
        
              {
                params: {
                  category: category,
                  language: "en",
                  apiKey: "pub_620038bcd63b90fbd03c83044e0224beea543",
    
                },
              }
            );
           
            setNews(response.data.results);
    
    
      
          } catch (error) {
            console.error("Error fetching news:", error);
          }
        };
    
        fetchNews();
      },[category]);

 

  return (
    <div className="bg-gradient-to-b from-[#464545] to-[#1c1c1c] min-h-screen text-white">
      <Header
        categories={categories}
        setCategory={setCategory}
      />
      <div className="container mx-auto p-4">
        {loading ? (
          <p>Loading news...</p>
        ) : news.length === 0 ? (
          <div className="flex flex-col items-center justify-center">
  <img
    src="nonews.gif"
    alt="No news available"
    className="w-55 h-60 object-contain"
  />
  <p className="text-lg text-gray-300 mt-4">No news available for the selected category.</p>
</div>

        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((article, index) => (
              <NewsCard key={index} article={article} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
