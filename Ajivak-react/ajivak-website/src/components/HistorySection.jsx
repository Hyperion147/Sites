import React, { useState } from 'react';

const HistorySection = () => {
  const [showDetails, setShowDetails] = useState(null);

  const toggleDetails = (id) => {
    setShowDetails(showDetails === id ? null : id);
  };

  return (
    <section id="history" className="my-8">
      <h1 className="text-center text-2xl font-bold">Historic Figures</h1>
      <div className="card bg-gray-100 p-4 my-2 rounded-lg cursor-pointer" onClick={() => toggleDetails('history1')}>
        <h3 className="text-xl font-semibold">महान आजीवक मक्खलि गोसाल</h3>
        <h4 className="text-lg">Mahan Ajivak Makkhali Gosal</h4>
      </div>
      {showDetails === 'history1' && (
        <div className="details bg-[#d3eec9] p-4 my-2 border-l-4 border-[#333]">
          <p>महान आजीवक मक्खलि गोसाल, महावीर और बुद्ध से बड़ी उम्र के थे।...</p>
        </div>
      )}
    </section>
  );
};

export default HistorySection;