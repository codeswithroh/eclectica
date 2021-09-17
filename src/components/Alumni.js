import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// for lazy loading
import { LazyLoadComponent } from "react-lazy-load-image-component";

// for animation
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";

import "./Alumni.css";

// import Swiper core and required modules
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);

export default function Alumni() {
  var shiftx = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className='alumnus'>
      <h1 className='heading'>
        <motion.span
          initial='hidden'
          animate='visible'
          variants={shiftx}
          transition={{ delay: 0.5 }}
        >
          A
        </motion.span>
        <motion.span
          initial='hidden'
          animate='visible'
          variants={shiftx}
          transition={{ delay: 0.6 }}
        >
          L
        </motion.span>
        <motion.span
          initial='hidden'
          animate='visible'
          variants={shiftx}
          transition={{ delay: 0.7 }}
        >
          U
        </motion.span>
        <motion.span
          initial='hidden'
          animate='visible'
          variants={shiftx}
          transition={{ delay: 0.8 }}
        >
          M
        </motion.span>
        <motion.span
          initial='hidden'
          animate='visible'
          variants={shiftx}
          transition={{ delay: 0.9 }}
        >
          N
        </motion.span>
        <motion.span
          initial='hidden'
          animate='visible'
          variants={shiftx}
          transition={{ delay: 1 }}
        >
          I
        </motion.span>
      </h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={false}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className='mySwiper'
      >
        <SwiperSlide>
          <LazyLoadComponent>
            <div
              className='alumni'
            >
              <div className='alumni-img'></div>
              <div>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
                  hic ducimus architecto atque facere est exercitationem
                  incidunt, error quo iure.
                </p>
              </div>
            </div>
          </LazyLoadComponent>
        </SwiperSlide>
        <SwiperSlide>
          <LazyLoadComponent>
            <div className='alumni'>
              <div className='alumni-img'></div>
              <div>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
                  hic ducimus architecto atque facere est exercitationem
                  incidunt, error quo iure.
                </p>
              </div>
            </div>
          </LazyLoadComponent>
        </SwiperSlide>
        <SwiperSlide>
          <LazyLoadComponent>
            <div className='alumni'>
              <div className='alumni-img'></div>
              <div>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
                  hic ducimus architecto atque facere est exercitationem
                  incidunt, error quo iure.
                </p>
              </div>
            </div>
          </LazyLoadComponent>
        </SwiperSlide>
        <SwiperSlide>
          <LazyLoadComponent>
            <div className='alumni'>
              <div className='alumni-img'></div>
              <div>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
                  hic ducimus architecto atque facere est exercitationem
                  incidunt, error quo iure.
                </p>
              </div>
            </div>
          </LazyLoadComponent>
        </SwiperSlide>
        <SwiperSlide>
          <LazyLoadComponent>
            <div className='alumni'>
              <div className='alumni-img'></div>
              <div>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
                  hic ducimus architecto atque facere est exercitationem
                  incidunt, error quo iure.
                </p>
              </div>
            </div>
          </LazyLoadComponent>
        </SwiperSlide>
        <SwiperSlide>
          <LazyLoadComponent>
            <div className='alumni'>
              <div className='alumni-img'></div>
              <div>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
                  hic ducimus architecto atque facere est exercitationem
                  incidunt, error quo iure.
                </p>
              </div>
            </div>
          </LazyLoadComponent>
        </SwiperSlide>
        <SwiperSlide>
          <LazyLoadComponent>
            <div className='alumni'>
              <div className='alumni-img'></div>
              <div>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
                  hic ducimus architecto atque facere est exercitationem
                  incidunt, error quo iure.
                </p>
              </div>
            </div>
          </LazyLoadComponent>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
