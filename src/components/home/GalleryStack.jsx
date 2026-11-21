import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, Keyboard } from 'swiper/modules';
import 'swiper/css';
import images from '/Datas/logo.json';

function Gallery() {
  return (
    <Swiper
      modules={[A11y, Autoplay, Keyboard]}
      slidesPerView="auto"
      spaceBetween={24}
      loop={images.length > 1}
      speed={700}
      autoplay={{ delay: 2000, reverseDirection: true, disableOnInteraction: false, pauseOnMouseEnter: true }}
      keyboard={{ enabled: true }}
      a11y={{ containerMessage: "Tools and skills" }}
      className="w-full min-w-0"
    >
      {images.map((img) => (
        <SwiperSlide key={img.name} className="!w-32">
          <div className="flex flex-col items-center justify-center font-stm">
            <img src={img.logo} alt={img.name + " logo"} className="h-15 w-15 rounded-md" />
            <p className="text-white">{img.name}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Gallery;

