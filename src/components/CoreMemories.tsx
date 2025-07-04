import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const photos = [
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Yamaha_Saxophone_YAS-62.tif/lossy-page1-800px-Yamaha_Saxophone_YAS-62.tif.jpg",
        caption: "live love laugh band",
    },
    {
        src: "https://thevarsity.ca/wp-content/uploads/2018/08/SCIENCE_Myhal_Centre-ANISHA_ROHRA_THE_VARSITY-Myhal_Centre_tour6_web.jpg",
        caption: "uofthacks @ myhal centre",
    },
    {
        src: "https://www.shutterstock.com/editorial/image-editorial/M6T6M553N7T7U6z6MTMxODE=/taylor-swift-440nw-13831852dt.jpg",
        caption: "taylor swift concert",
    }
    // ill add more later
];

const CoreMemories = () => {
  return (
    <div className="w-full max-w-3xl mx-auto py-8">
      <h2 className="text-xl font-bold text-center mb-4">my core memories</h2>
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
                className="rounded-lg w-full max-h-[400px] object-cover mb-2"
              />
              <p className="py-6 text-center text-zinc-600">{photo.caption}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default CoreMemories