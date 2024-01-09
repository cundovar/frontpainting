import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const EffectPaint = () => {
    const carouselRefs = [useRef(null), useRef(null), useRef(null),useRef(null)];

    useEffect(() => {
      const carousels = carouselRefs.map((ref) => ref.current);
  
      const animateCarousel = (carousel,index) => {
        const rots = {
          x: 0,
          y: 0,
          z: 0
        };
  
        const tl = gsap.timeline({
          repeat: -1,
          yoyo: true,
          repeatDelay: 2,
          defaults: {
            delay: 3 + index * 0.3, // Appliquer un décalage en fonction de l'index
          duration: 1,
          ease: "Power1.easeInOut"
          },
          onUpdate: () => {
            gsap.set(carousel, {
            
              transform: `rotateX(${rots.x}deg) rotateY(${rots.y}deg) rotateZ(${rots.z}deg)`
            });
          }
        })
          .to(rots, { y: -90 }) //right
          .to(rots, { y: -180 }) //back
          .to(rots, { y: -270 }) //left
          .to(rots, { x: 90 }) //bottom
          .to(rots, { x: -90 });
      };
  
     carousels.forEach((carousel, index) => animateCarousel(carousel, index));
    }, []);

  return (
    <>
      <div className="   main_effect">
        <div className="main w-full ">
          <article className="container">
            <div
              ref={carouselRefs[0]}
              className="w-36 h-36 carousel"
              id="carousel1"
            >
              <img
                className="w-full h-full object-cover item front"
                src="./images/page_home/cube1/1.jpg"
                alt="image_home"
              />
              <img
                className="w-full h-full object-cover item right"
                src="./images/page_home/cube1/2.jpg"
                alt="image_home"
              />
              <img
                className="w-full h-full object-cover item back"
                src="./images/page_home/cube1/3.jpg"
                alt="image_home"
              />
              <img
                className="w-full h-full object-cover item bottom"
                src="./images/page_home/cube1/4.jpg"
                alt="image_home"
              />
              <img
                className="w-full h-full object-cover item  left"
                src="./images/page_home/cube1/4.jpg"
                alt="image_home"
              />
              <img
                className="w-full h-full object-cover item top "
                src="./images/page_home/cube1/4.jpg"
                alt="image_home"
              />
            </div>
          </article>
          <article className="container">
            <div
           ref={carouselRefs[1]}
              className="w-36 h-36 carousel"
              id="carousel2"
            >
              <img
                className="w-full h-full object-cover item front"
                src="./images/page_home/cube2/5.jpg"
                alt="image_home"
              />
              <img
                className="w-full h-full object-cover item right"
                src="./images/page_home/cube2/6.jpg"
                alt="image_home"
              />
              <img
                className="w-full h-full object-cover item back"
                src="./images/page_home/cube2/7.jpg"
                alt="image_home"
              />
              <img
                className="w-full h-full object-cover item bottom"
                src="./images/page_home/cube2/8.jpg"
                alt="image_home"
              />
            </div>
          </article>
          <article className="container">
            <div
              ref={carouselRefs[2]}
              className="w-36 h-36 carousel"
              id="carousel1"
            >
              <img
                className="w-full h-full object-cover item front"
                src="./images/page_home/cube1/1.jpg"
                alt="image_home"
              />
              <img
                className="w-full h-full object-cover item right"
                src="./images/page_home/cube1/2.jpg"
                alt="image_home"
              />
              <img
                className="w-full h-full object-cover item back"
                src="./images/page_home/cube1/3.jpg"
                alt="image_home"
              />
              <img
                className="w-full h-full object-cover item bottom"
                src="./images/page_home/cube1/4.jpg"
                alt="image_home"
              />
              <img
                className="w-full h-full object-cover item  left"
                src="./images/page_home/cube1/4.jpg"
                alt="image_home"
              />
              <img
                className="w-full h-full object-cover item top "
                src="./images/page_home/cube1/4.jpg"
                alt="image_home"
              />
            </div>
          </article>
          <article className="container">
            <div
              ref={carouselRefs[3]}
              className="w-36 h-36 carousel"
              id="carousel1"
            >
              <img
                className="w-full h-full object-cover item front"
                src="./images/page_home/cube1/1.jpg"
                alt="image_home"
              />
              <img
                className="w-full h-full object-cover item right"
                src="./images/page_home/cube1/2.jpg"
                alt="image_home"
              />
              <img
                className="w-full h-full object-cover item back"
                src="./images/page_home/cube1/3.jpg"
                alt="image_home"
              />
              <img
                className="w-full h-full object-cover item bottom"
                src="./images/page_home/cube1/4.jpg"
                alt="image_home"
              />
              <img
                className="w-full h-full object-cover item  left"
                src="./images/page_home/cube1/4.jpg"
                alt="image_home"
              />
              <img
                className="w-full h-full object-cover item top "
                src="./images/page_home/cube1/4.jpg"
                alt="image_home"
              />
            </div>
          </article>
         
        </div>
      </div>
    </>
  );
};

export default EffectPaint;
