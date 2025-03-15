"use client";

import { FC } from "react";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import "keen-slider/keen-slider.min.css";
import { Box } from "@mui/material";

const images = [
  "/images/landing1.jpg",
  "/images/landing2.jpg",
  "/images/landing3.jpg",
  "/images/landing4.jpg",
];

const ImageSlider: FC = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1.5,
      spacing: 20,
    },
  });

  return (
    <Box ref={sliderRef} className="keen-slider" sx={{ width: "100%", mx: "auto", overflow: "hidden", margin: 0 }}>
      {images.map((src, index) => (
        <Box key={index} className="keen-slider__slide" sx={{ width: 454, display: "flex", justifyContent: "center" }}>
          <Image
            src={src}
            alt={`Slide ${index + 1}`}
            width={454}
            height={832}
            style={{ objectFit: "cover" }}
            priority={index === 0}
          />
        </Box>
      ))}
    </Box>
  );
};

export default ImageSlider;
