import { Swiper, SwiperSlide } from "swiper/react";
import { sliderData } from "../constants/data";
import { EffectFade, Autoplay } from "swiper";
import "swiper/css/effect-fade";
import "swiper/css";
import { motion } from "framer-motion";
import logoLight from "../assets/img/logo-light.svg";
import { useTranslation } from "react-i18next";

const HeroSlider = () => {
  const { t } = useTranslation();

  return (
    <Swiper
      modules={[EffectFade, Autoplay]}
      effect="fade"
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      className="heroSlider relative h-[600px] lg:h-[900px]"
    >
      {sliderData.map(({ id, bg }) => (
        <SwiperSlide
          className="h-full relative flex justify-center items-center overflow-hidden"
          key={id}
        >
          {/* Background Image with slow zoom for parallax feel */}
          <motion.div
            className="absolute top-0 w-full h-full overflow-hidden"
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8 }}
          >
            <img
              src={bg}
              alt={t("home.h1")}
              className="object-cover w-full h-full"
            />
          </motion.div>

          {/* Elegant dark gradient overlay */}
          <div className="absolute w-full h-full bg-gradient-to-b from-black/40 via-black/20 to-black/50" />

          {/* Centered Logo with fade-in and scale */}
          <motion.div
            className="z-20 flex flex-col justify-center items-center text-center px-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            <img
              src={logoLight}
              alt="Villa Avantgarde Logo"
              className="w-40 lg:w-60 mb-4"
            />

            {/* Tagline using translation */}
            <motion.p
              className="text-white text-lg lg:text-2xl tracking-wide uppercase font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              {t("home.tagline")}
            </motion.p>
          </motion.div>

          {/* Optional bottom decorative line */}
          <motion.div
            className="absolute bottom-10 w-full flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 1 }}
          >
            <div className="w-24 h-1 bg-accent rounded-full animate-pulse" />
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
