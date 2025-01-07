// import React , { useState , useEffect} from 'react';
// import './App.css'; 
// import axios from 'axios';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import Header from './components/Header';
// import NewsCard from './components/NewsCard';
// import openai from '../openaiConfig';



// function App() {
//   const [news, setNews] = useState([]);
//   const [category, setCategory] = useState("technology");
//   const [country, setCountry] = useState("us");

//   const categories = ["Technology", "Business", "Sports", "Entertainment"];
//   const countries = [
//     { name: "United States", code: "us" },
//     { name: "India", code: "in" },
//     { name: "United Kingdom", code: "gb" },
//     { name: "Australia", code: "au" },
//     { name: "Canada", code: "ca" },
//     { name: "Germany", code: "de" },
//     { name: "France", code: "fr" },
//     { name: "Italy", code: "it" },
//     { name: "Brazil", code: "br" },
//     { name: "Japan", code: "jp" },
//     { name: "Mexico", code: "mx" },
//     { name: "South Korea", code: "kr" },
//     { name: "Russia", code: "ru" },
//     { name: "Argentina", code: "ar" },
//     { name: "Spain", code: "es" },
//   ];

  // useEffect(() => {
//   //   const fetchNews = async () => {
//   //     try {
//   //       const response = await axios.get(
//   //         // "https://newsapi.org/v2/top-headlines",
//   //         "https://newsdata.io/api/1/news",
    
//   //         {
//   //           params: {
//   //             country: country, 
//   //             category: category,
//   //             language: "en",
//   //             // apiKey: "eec9acd3de9f4877bdb1b4cd162720cb",  //(News Api ) 
//   //                apiKey: "pub_620038bcd63b90fbd03c83044e0224beea543",

//   //           },
//   //         }
//   //       );
       
//   //       // setNews(response.data.articles);
//   //       setNews(response.data.results);


  
//   //     } catch (error) {
//   //       console.error("Error fetching news:", error);
//   //     }
//   //   };

//   //   fetchNews();
//   // },[category , country]);



//   return (
//     // <div className="bg-gradient-to-b from-blue-500 to-blue-900 min-h-screen text-white">
//       <div className="bg-gradient-to-b from-[#464545] to-[#1c1c1c] min-h-screen text-white">

//     <Header
//      categories={categories} setCategory={setCategory} 
//      countries={countries} setCountry={setCountry}/>
//     <div className="container mx-auto p-4">
//       {news.length === 0 ? (
//         <p>No news available for the selected country and category.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {news.map((article, index) => (
//             <NewsCard key={index} article={article} />
//           ))}
//         </div>
//       )}
//     </div>
//   </div>
//   )
// }

// export default App






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
    src="src/assets/nonews.gif"
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
