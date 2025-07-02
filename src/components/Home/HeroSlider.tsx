// HeroSlider.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import book1 from "../../assets/book1.png";

const books = [
  {
    id: 1,
    img: book1,
    title: "Book1",
  },
  {
    id: 2,
    img: book1,
    title: "Book2",
  },
  {
    id: 3,
    img: book1,
    title: "Book3",
  },
];

const HeroSlider = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {books.map((book) => (
        <SwiperSlide key={book.id}>
          <img
            src={book.img}
            alt={book.title}
            className="w-full h-[600px] 2xl:h-[800px] object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
