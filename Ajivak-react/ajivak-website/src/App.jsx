import React from 'react';
import Header from './components/Header';
import BookSlider from './components/BookSlider';
import HistorySection from './components/HistorySection';
import LiteratureSection from './components/LiteratureSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="font-roboto bg-[#effff2] min-h-screen flex flex-col">
     
      <Header />

      <main className="flex-grow p-4">
        <div className="img-sec flex flex-wrap justify-around gap-4 my-8">
          <img src="./img/bgImg1.jpg" alt="Background 1" className="bgimg h-[545px] rounded-lg shadow-lg" />
          <img src="./img/bgImg2.jpg" alt="Background 2" className="bgimg h-[545px] rounded-lg shadow-lg" />
          <img src="./img/bgImg3.jpg" alt="Background 3" className="bgimg h-[545px] rounded-lg shadow-lg" />
        </div>

        <BookSlider />

        <HistorySection />

        <LiteratureSection />

        <AboutSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;