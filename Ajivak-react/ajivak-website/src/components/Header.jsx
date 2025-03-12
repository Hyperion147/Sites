import React from 'react';

const Header = () => {
  return (
    <header className="bg-[#335346] text-white py-4 text-center">
      <h1 className="text-2xl font-bold">AJIVAK - HISTORY AND LITERATURE</h1>
      <nav>
        <ul className="flex justify-center space-x-4 mt-2">
          <li><a href="#history" className="text-white hover:underline">History</a></li>
          <li><a href="#book" className="text-white hover:underline">Books</a></li>
          <li><a href="https://hyperion147.github.io/Literature/" className="text-white hover:underline">Literature</a></li>
          <li><a href="#about" className="text-white hover:underline">About</a></li>
          <li><a href="#contact" className="text-white hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;