import React, { useEffect, useState } from "react";
import styles from "./BgGraphics.module.css";
import HandImage from "@/public/assets/images/graphic-hand.png";
import LaptopImage1 from "@/public/assets/images/laptop-frames/laptop1.png";
import LaptopImage2 from "@/public/assets/images/laptop-frames/laptop2.png";
import LaptopImage3 from "@/public/assets/images/laptop-frames/laptop3.png";
import LaptopImage4 from "@/public/assets/images/laptop-frames/laptop4.png";
import LaptopImage5 from "@/public/assets/images/laptop-frames/laptop5.png";
import LaptopImage6 from "@/public/assets/images/laptop-frames/laptop6.png";
import Image from "next/image";

const images = [
  LaptopImage1,
  LaptopImage2,
  LaptopImage3,
  LaptopImage4,
  LaptopImage5,
  LaptopImage6,
];

export default function BgGraphics() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.bgGraphicsFrame}>
      <div className={styles.laptopFrame}>
        {images.map((src, i) => (
          <Image
            key={i}
            src={src}
            width={400}
            height={400}
            alt={`Laptop ${i + 1}`}
            priority={i === 0}
            className={i != current ? "hidden" : ""}
          />
        ))}
      </div>

      <Image
        src={HandImage}
        alt="Graphic Hand"
        width={826.67}
        height={602.09}
        className={styles.handFrame}
      />
    </div>
  );
}
