"use client";

import React, { ReactNode } from "react";
import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface GenericCarouselProps<T> {
  items: T[];
  renderItem: (item: T) => ReactNode;
  swiperOptions?: Omit<SwiperProps, 'children'>;
  title?: string;
  subtitle?: string;
  className?: string;
}

const defaultSwiperOptions = {
  modules: [Autoplay],
  spaceBetween: 20,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
};

const GenericCarousel = <T,>({
  items,
  renderItem,
  swiperOptions = {},
  title,
  subtitle,
  className = "",
}: GenericCarouselProps<T>) => {
  const mergedOptions = { ...defaultSwiperOptions, ...swiperOptions };

  return (
    <section className={`w-full py-4 lg:py-12 px-3 lg:px-16 mx-auto ${className}`}>
      {title && (
        <div className="text-center mb-6 lg:mb-10">
          <h2 className="text-l md:text-4xl font-bold text-gray-900">{title}</h2>
          {subtitle && <p className="text-gray-500 mt-2">{subtitle}</p>}
        </div>
      )}

      <Swiper {...mergedOptions} className="w-full">
        {items.map((item, index) => (
          <SwiperSlide key={index} className="h-auto py-2">
            {renderItem(item)}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default GenericCarousel;
