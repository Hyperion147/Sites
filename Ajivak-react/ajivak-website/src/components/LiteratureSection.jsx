import React, { useState } from 'react';

const LiteratureSection = () => {
  const [showDetails, setShowDetails] = useState(null);

  const toggleDetails = (id) => {
    setShowDetails(showDetails === id ? null : id);
  };

  return (
    <section id="literature" className="my-8">
      <h1 className="text-center text-2xl font-bold">Literature Overview</h1>
      <div className="card bg-gray-100 p-4 my-2 rounded-lg cursor-pointer" onClick={() => toggleDetails('lit1')}>
        <img src="https://www.vaniprakashan.com/uploads/author_image/author_157.png" alt="Dr. Dharamveer" className="w-[200px] mx-auto" />
        <h3 className="text-xl font-semibold mt-2 text-center">डॉ. धर्मवीर</h3>
        <h4 className="text-lg text-center">Dr. Dharamveer</h4>
      </div>
      {showDetails === 'lit1' && (
        <div className="details bg-[#d3eec9] p-4 my-2 border-l-4 border-[#333]">
          <p>जन्म : 9 दिसम्बर 1950</p>
          <p>शिक्षा : एम.ए., बी.एससी., पीएच.डी., एम.डी. पी. ए., एम.फ़िल्, डी.लिट्. ।</p>
          <p>1980 के केरल कैडर के आई.ए.एस. अधिकारी रहे ।</p>
          <p>प्रमुख कृतियाँ : महान आजीवक : कबीर, रैदास और गोसाल (2017), कबीर : 'खसम खुशी क्यों होय?' (2013), प्रेमचन्द की नीली आँखें (2010), मेरी पत्नी और भेड़िया (2009), दलित चिन्तन का विकास (2007), दूसरों की जूतियाँ (2007), तीन द्विज हिन्दू स्त्रीलिंगों का चिन्तन (2007), चमार की बेटी रूपा (2007), दलित सिविल क़ानून (2007), दलित आत्मालोचन की प्रक्रिया (2007), 'जूठन' का लेखक कौन है? (2006), थेरीगाथा की स्त्रियाँ और डॉ. अम्बेडकर (2005), कामसूत्र की सन्तानें (2005), प्रेमचन्द : सामन्त का मुंशी (2005), अशोक बनाम वाजपेयी : अशोक वाजपेयी (2004), डॉ. अम्बेडकर के प्रशासनिक विचार (2004), सीमन्तनी उपदेश (सम्पादित) (2004), कबीर : सूत न कपास (2003), कबीर के कुछ और आलोचक (2002), कबीर : डॉ. हजारीप्रसाद द्विवेदी का प्रक्षिप्त चिन्तन (2000), कबीर और रामानन्द : किंवदन्तियाँ (2000), कबीर : बाज भी, कपोत भी, पपीहा भी (2000), कबीर के आलोचक (1997), सन्त रैदास का निर्वर्ण सम्प्रदाय (पुरस्कृत) (1990), हिन्दी की आत्मा (1989), लोकायती वैष्णव विष्णु प्रभाकर (पुरस्कृत) (1987)।</p>
          <p>निधन : 9 मार्च 2017</p>
        </div>
      )}
    </section>
  );
};

export default LiteratureSection;