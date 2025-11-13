"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

// Import logos
import LogoOne from "@/assets/img/home-3/partner-01.svg";
import LogoTwo from "@/assets/img/home-3/partner-02.svg";
import LogoThree from "@/assets/img/home-3/partner-03.svg";
import LogoFour from "@/assets/img/home-3/partner-04.svg";
import PlainIcon from "@/assets/img/home-3/star.svg";

export default function Collaborators() {
  const logos = [
    LogoOne,
    PlainIcon,
    LogoTwo,
    PlainIcon,
    LogoThree,
    PlainIcon,
    LogoFour,
    PlainIcon,
    LogoOne,
    PlainIcon,
    LogoTwo,
    PlainIcon,
    LogoThree,
    PlainIcon,
    LogoFour,
  ];

  return (
    <div className="bg-brand-two py-10 ">
      <div className="lg:max-w-[calc(100%-8rem)] px-5 lg:px-0 mx-auto flex flex-col lg:flex-row items-start lg:items-center  h-auto ">
        {/* Left title */}
        <div className="lg:border-r border-gray-700/50 w-full lg:w-3/12 text-3xl font-extrabold p-5 text-white leading-tight px-5">
          Our <br /> Collaborators
        </div>

        {/* Carousel */}
        <div className="pl-5 w-full lg:w-9/12">
          <Swiper
            slidesPerView="auto"
            spaceBetween={10}
            freeMode={true}
            loop={true}
            speed={6000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            allowTouchMove={false}
            modules={[Autoplay, FreeMode]}
            className="mySwiper"
          >
            {logos.map((logo, index) => (
              <SwiperSlide
                key={index}
                className="!w-32 flex justify-center items-center"
              >
                <div className="group flex justify-center items-center h-16 transition-all">
                  {logo === PlainIcon ? (
                    <Image
                      src={logo}
                      alt="separator icon"
                      width={25}
                      height={25}
                      className="object-contain inline-flex shrink-0 opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                      priority
                    />
                  ) : (
                    <Image
                      src={logo}
                      alt={`Collaborator logo ${index + 1}`}
                      height={40}
                      width={120}
                      className="inline-flex shrink-0 object-contain opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                      priority
                    />
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
