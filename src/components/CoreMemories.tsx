import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";

const photos = [
  {
    src: "/assets/website/ramen.jpg",
    caption: "live love laugh band",
  },
  {
    src: "/assets/website/eureka.jpg",
    caption: "organizing eurekahacks!",
  },
  {
    src: "/assets/website/ts.JPG",
    caption: "taylor swift concert",
  },
  {
    src: "/assets/website/canada.jpg",
    caption: "lli @ canada day",
  },
  {
    src: "/assets/website/news.jpg",
    caption: "on the news!",
  },
  {
    src: "/assets/website/band.jpg",
    caption: "spring concert!",
  },
  {
    src: "/assets/website/maya.jpg",
    caption: "gr 11 semi formal",
  },
  {
    src: "/assets/website/laugh.jpg",
    caption: "tech bros",
  },
  {
    src: "/assets/website/htn.jpg",
    caption: "hack the north 24",
  },
  {
    src: "/assets/website/jes.jpg",
    caption: "me and jessie <3",
  },
  {
    src: "/assets/website/krispy.jpg",
    caption: "lli & krispy kreme sale",
  },
  {
    src: "/assets/website/halloween.JPG",
    caption: "halloween w favs",
  },
  {
    src: "/assets/website/gasp.jpg",
    caption: "teen builders",
  },
  {
    src: "/assets/website/hotchoc.jpg",
    caption: "lli & hot choco",
  },
  {
    src: "/assets/website/relayuni.jpg",
    caption: "relay university",
  },
  {
    src: "/assets/website/prom.JPG",
    caption: "prom 24",
  },
];

const CoreMemories = () => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <h2 className="text-xl font-bold text-center mb-4">my core memories ♡</h2>
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        navigation={true}
      >
        {photos.map((photo, id) => (
          <SwiperSlide key={id}>
            <div className="flex flex-col items-center">
              <img
                src={photo.src}
                alt={photo.caption}
                className="rounded-lg w-full max-h-[500px] object-cover mb-2"
              />
              <p className="py-10 text-center font-bold text-zinc-600">
                {photo.caption}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CoreMemories;
