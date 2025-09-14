import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Sarah Williams",
    role: "Project Manager at TechNova",
    message:
      "Working with Aftab was an outstanding experience in frontend and backend integration helped us launch on time.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "John Carter",
    role: "CTO at BrightSoft",
    message:
      "Aftab is a talented MERN Stack developer. He consistently delivered high-quality code and exceeded expectations in every sprint.",
    image: "https://randomuser.me/api/portraits/men/64.jpg",
  },
  {
    name: "Emily Chen",
    role: "Product Designer at UIHub",
    message:
      "His ability to translate complex designs into pixel-perfect, scalable interfaces is amazing. He is a great collaborator.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Sarah Williams",
    role: "Project Manager at TechNova",
    message:
      "Working with Aftab was an outstanding experience in frontend and backend integration helped us launch on time.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "John Carter",
    role: "CTO at BrightSoft",
    message:
      "Aftab is a talented MERN Stack developer. He consistently delivered high-quality code and exceeded expectations in every sprint.",
    image: "https://randomuser.me/api/portraits/men/64.jpg",
  },


];

const TestimonialsSlider = () => {
  return (
    <section id="reviews" className="bg-gray-50 py-10 pt-20  px-4 sm:px-6 lg:px-20  md:mx-auto">
      <div className="max-w-6xl mx-auto text-center mt-[-5px] ">
        <h2 className="text-3xl font-bold text-gray-700 mb-12">
          What People Say About Me
        </h2>

        <Swiper
      
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 4000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },

          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl border border-gray-200 text-left h-full">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover border"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">"{item.message}"</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
