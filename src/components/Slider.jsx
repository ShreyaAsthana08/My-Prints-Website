import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "/1.png" },
  { url: "/2.png" },
  { url: "/3.png" },
  { url: "/4.png" },

];

const Slider = () => {
  return (
    <div 
    data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"
     >

      <SimpleImageSlider
        width={1521}
        height={400}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        autoPlayDelay={1.5}       
      />
    </div>
  );
}
export default Slider;