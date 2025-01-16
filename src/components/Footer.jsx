import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center py-4">
      <p>Flash Reads © 2025</p>
      <p>
      {" "} @ 2025  - All Rights Reserved
        <a
          href="https://vanshika3004.github.io/My-Portfolio.github.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          Vanshika
        </a>
      </p>
      <div className="mt-2">
        <a
          href="https://github.com/Vanshika3004"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 text-blue-400 hover:underline"
        >
          GitHub
        </a>
        |
        <a
          href="https://www.linkedin.com/in/vanshika-pahwa"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 text-blue-400 hover:underline"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;
