import React, { useEffect } from 'react';

const BookSlider = () => {
  useEffect(() => {
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');

    const handleNextClick = () => {
      let items = document.querySelectorAll('.item');
      document.querySelector('.slide').appendChild(items[0]);
    };

    const handlePrevClick = () => {
      let items = document.querySelectorAll('.item');
      document.querySelector('.slide').prepend(items[items.length - 1]);
    };

    next.addEventListener('click', handleNextClick);
    prev.addEventListener('click', handlePrevClick);

    // Cleanup event listeners
    return () => {
      next.removeEventListener('click', handleNextClick);
      prev.removeEventListener('click', handlePrevClick);
    };
  }, []);

  return (
    <div className="slider mt-10">
      <div className="books relative w-[1100px] h-[700px] mx-auto shadow-lg">
        <div className="slide">
          {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
            <div
              key={index}
              className={`item absolute w-[200px] h-[300px] bg-cover bg-center rounded-lg shadow-lg ${
                index === 0 || index === 1 ? 'top-0 left-0 w-[40%] h-full rounded-none' : ''
              }`}
              style={{
                backgroundImage: `url(https://via.placeholder.com/200x300)`,
                left: index === 2 ? '50%' : index === 3 ? 'calc(50% + 220px)' : 'calc(50% + 440px)',
              }}
            >
              <div className="content absolute top-[83%] left-[50%] transform -translate-x-1/2 w-[300px] text-left hidden">
                <button className="px-4 py-2 bg-[#7ff4c5] border border-[#424f43] font-bold rounded-lg">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="button text-center relative bottom-[160px] left-[320px]">
        <button className="prev px-4 py-2 bg-white border border-black rounded-lg mx-2" aria-label="Previous">
          Prev
        </button>
        <button className="next px-4 py-2 bg-white border border-black rounded-lg mx-2" aria-label="Next">
          Next
        </button>
      </div>
    </div>
  );
};

export default BookSlider;