import React from 'react'

function Header({ categories, setCategory }) {
  return (
    <div  style={{
      padding: '10px 20px',
      margin: '0',
    }}
    className="bg-custom p-6 flex flex-col sm:flex-row items-center justify-between text-white">
       <div className="flex items-center gap-4">
       <div className="gif-container">
       <img
            src="src/assets/gif.gif" 
            alt="Newspaper Animation"
            className="h-16 sm:h-20 object-contain"
          />
          </div>
     <h1 className="text-3xl font-bold mb-4 sm:mb-0 text-yellow-300 animated-title">Flash Reads</h1>
     </div>
     <div className="flex gap-4">
     <select
          className="p-3 rounded-md bg-white text-black outline-none"
          onChange={(e) => setCategory(e.target.value)}
          defaultValue="default"
        >
          <option value="default" disabled>
            Select Category
          </option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>

        {/* <select
         className="p-2 rounded-md bg-white text-black outline-none"
          onChange={(e) => setCountry(e.target.value)}
          defaultValue="default"
        >
          <option value="default" disabled>
            Select Country
          </option>
          {countries.map((country, index) => (
            <option key={index} value={country.code}>
              {country.name}
            </option>
          ))}
        </select> */}

      </div>
    </div>
  )
}

export default Header