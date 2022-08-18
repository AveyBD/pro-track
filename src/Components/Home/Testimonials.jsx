import React from "react";
import image1 from "../../images/testimonials.jpg";
import image2 from "../../images/calander.png";
import image3 from "../../images/testimonials.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const Testimonials = () => {
  return (
    <div className="bg-[url('/src/images/testimonials.jpg')] lg:h-screen mb-80 my-24 bg-cover">
      <div className="card lg:w-[484px] lg:h-[500px] bg-teal-500 shadow-xl lg:top-40 top-60 lg:left-[742px] rounded-none">
        <h1 className="ml-16 mt-5 text-slate-600 font-serif tracking-wider font-bold">
          Testimonial
        </h1>
        <h1 className="text-4xl ml-16 font-bold mt-5 text-zinc-200">
          What Our Clients Say
        </h1>

        <div className="carousel w-80 ml-24 mt-10">
          <div id="item1" className="carousel-item w-full">
            <p className="text-zinc-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              voluptates quidem non ab delectus natus earum, eveniet, rerum
              voluptas architecto, similique provident esse. Labore, enim. Enim
              cumque officiis beatae non?
            </p>
          </div>
          <div id="item2" className="carousel-item w-full">
            <p className="text-zinc-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              voluptates quidem non ab delectus natus earum, eveniet, rerum
              voluptas architecto, similique provident esse. Labore, enim. Enim
              cumque officiis beatae non?
            </p>
          </div>
          <div id="item3" className="carousel-item w-full">
            <p className="text-zinc-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              voluptates quidem non ab delectus natus earum, eveniet, rerum
              voluptas architecto, similique provident esse. Labore, enim. Enim
              cumque officiis beatae non?
            </p>
          </div>
          <div id="item4" className="carousel-item w-full">
            <p className="text-zinc-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              voluptates quidem non ab delectus natus earum, eveniet, rerum
              voluptas architecto, similique provident esse. Labore, enim. Enim
              cumque officiis beatae non?
            </p>
          </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn btn-xs"></a>
          <a href="#item2" className="btn btn-xs"></a>
          <a href="#item3" className="btn btn-xs"></a>
          <a href="#item4" className="btn btn-xs"></a>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
