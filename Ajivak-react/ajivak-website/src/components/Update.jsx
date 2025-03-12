import React from 'react';
import Header from './components/Header';
import BookSlider from './components/BookSlider';
import HistorySection from './components/HistorySection';
import Footer from './components/Footer';
import AboutSection from './AboutSection';
import LiteratureSection from './LiteratureSection';

const App = () => {
  return (
    <div className="font-roboto">
      <Header />
      <main className="p-4">
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