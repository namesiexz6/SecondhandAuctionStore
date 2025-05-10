import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import cc1 from '../../assets/cc1.png';
import cc2 from '../../assets/cc2.png';
import cc3 from '../../assets/cc3.png';


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";





const ContentCarousel = () => {
  // Javascript
  const data = [
    { id: 1, link: cc1 },
    { id: 2, link: cc2 },
    { id: 3, link: cc3 },
  ];


  return (
    <div>
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="mySwiper h-100 object-cover 
        rounded-md mb-4 "
      >
        {data?.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.link} alt={'carousel'} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <Swiper
        slidesPerView={5}
        spaceBetween={10}
        pagination={true}
        navigation={true}
        modules={[Pagination, Autoplay,Navigation]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper object-cover rounded-md"
      >
        {data?.map((item) => (
          <SwiperSlide key={item.id}>
            <img 
              className="rounded-md"
              src={item.download_url} 
              alt={item.author || 'carousel'}
            />
          </SwiperSlide>
        ))}
      </Swiper> */}
    </div>
  );
};

export default ContentCarousel;
