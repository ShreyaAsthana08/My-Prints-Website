import { useEffect, useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "/1.png" },
  { url: "/2.png" },
  { url: "/3.png" },
  { url: "/4.png" },
];

const Slider = () => {
  const [sliderHeight, setSliderHeight] = useState(400); // default desktop height

  useEffect(() => {
    // Set height based on screen width (runs only in browser)
    const handleResize = () => {
      const width = window.innerWidth;
      setSliderHeight(width < 768 ? 200 : 400);
    };

    handleResize(); // set initially
    window.addEventListener("resize", handleResize); // update on resize
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <SimpleImageSlider
        width="100%"
        height={sliderHeight}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        autoPlayDelay={1.5}
      />
    </div>
  );
};

export default Slider;
