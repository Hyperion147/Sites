import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function BookSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="w-3/4 m-auto">
      <div className="mt-20">
        <Slider {...settings} >
        {images.map((m) => (
          <div className='bg-green-200 h-[600px] text-black rounded-xl'>
            <div className='rounded-t-xl flex justify-center'>
              <img src={m.img} alt='' className='h-[500px]' />
            </div>
            <div className='flex justify-center mt-5'>
              <button className='bg-green-800 text-white text-lg px-6 py-1 rounded-xl'>Read More</button>
            </div>
          </div>

        ))}
        </Slider>
      </div>

    </div>
  );
}

const images = [
  {
    img: "https://www.vaniprakashan.com/uploads/product_image/dalit-chintan-ka-vikas.jpg"
  },
  {
    img: "https://www.vaniprakashan.com/uploads/product_image/chamar-ki-beti-roopa.jpg"
  },
  {
    img: "https://www.vaniprakashan.com/uploads/product_image/42427afc3622243645d7ffcd9ada2107.jpg"
  },
  {
    img: "https://www.vaniprakashan.com/uploads/product_image/d5179226eb72e9bc7c3af088938f8de0.jpg"
  },
  {
    img: "https://www.vaniprakashan.com/uploads/product_image/63c4cb01943e8ca33eb6c4b24f8e6363.jpg"
  }
  
]

export default BookSlider;