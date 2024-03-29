import gsap from "gsap";
import { Flip } from "gsap/all";
import React, { useEffect } from "react";

const EffectPaint3 = () => {
  gsap.registerPlugin(Flip);
  useEffect(() => {
    // Code pour l'animation d'introduction
    gsap.to(".main2", { autoAlpha: 1, duration: 0.4 });
    gsap.from(".grid article", { autoAlpha: 0, yPercent: 30, stagger: 0.04 });
  }, []); // Dépendance vide pour s'assurer que cela ne se déclenche qu'une fois après le rendu initial


 

  const container = document.querySelector(".grid");

  const handleArticleClick = (e) => {
    e.preventDefault();
    const article = e.currentTarget;
    if (article.classList.contains("details")) {
      return;
    }
    const state = Flip.getState(".grid article");

    const currentDetails = document.querySelector(".details");
    currentDetails && currentDetails.classList.remove("details");


    article.classList.add("details");
    const tl = Flip.from(state, {
      duration: 1,
      ease: "power1.inOut",
      stagger: 0.05,
      absolute: true,
      toggleClass: "changing",
      onStart: () => {
        gsap.to(".details-view", {
          opacity: 0,
          y: "100%",
          duration: 0.5,
        });
        gsap.to(".grid article", {
          "--max": 0,
          duration: 0.8,
        });
        gsap.to(".grid article.details", {
          "--max": 1,
          duration: 1,
          delay: 0.2,
        });
      },
    });

    tl.to(".details .details-view", { opacity: 1, y: 0, duration: 0.75 }, "-=.25");
  };

  const handleButtonClick = (e) => {
    const button = e.currentTarget;
    const a = button.parentNode.parentNode.parentNode;
    const state = Flip.getState(".grid article, .description .details-view");
    container.prepend(a);
    const tl = Flip.from(state, {
      duration: 1,
      ease: "power1.inOut",
      stagger: 0.05,
      absolute: true,
    });
  };
 

   


  return (
    <div className="relative">
    <div className="mainMain">
      <div className="main2">
       

        <div className="grid">
          <article className="article article-1 details"onClick={handleArticleClick}>
            <a href="#">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/fbanijhrol4-annie-spratt-776x951.jpg"
                alt=""
              />
            </a>
            <section className="description">
              <h2>Window Sill?</h2>
              <div className="details-view">
                <p>
                  Ginger is a flowering plant whose rhizome, ginger root or
                  ginger, is widely used as a spice folkmedicine.
                </p>
                <button className="buttonGrid" type="button"onClick={handleButtonClick}>Move to top</button>
              </div>
            </section>
          </article>
          <article className="article article-2"onClick={handleArticleClick}>
            <a href="#">
              <img
                src="./images/page_home/cube1/2.jpg"
                alt=""
              />
            </a>
            <section className="description">
              <h2>Window Sill?</h2>
              <div className="details-view">
                <p>
                  Ginger is a flowering plant whose rhizome, ginger root or
                  ginger, is widely used as a spice folkmedicine.
                </p>
                <button className="buttonGrid" type="button"onClick={handleButtonClick}>Move to top</button>
              </div>
            </section>
          </article>
          <article className="article article-3 "onClick={handleArticleClick}>
            <a href="#">
              <img
                src="./images/page_home/cube1/1.jpg"
                alt=""
              />
            </a>
            <section className="description">
              <h2>Window Sill?</h2>
              <div className="details-view">
                <p>
                  Ginger is a flowering plant whose rhizome, ginger root or
                  ginger, is widely used as a spice folkmedicine.
                </p>
                <button className="buttonGrid" type="button"onClick={handleButtonClick}>Move to top</button>
              </div>
            </section>
          </article>
          <article className="article article-4"onClick={handleArticleClick}>
            <a href="#">
              <img
                src="./images/page_home/cube1/3.jpg"
                alt=""
              />
            </a>
            <section className="description">
              <h2>Window Sill?</h2>
              <div className="details-view">
                <p>
                  Ginger is a flowering plant whose rhizome, ginger root or
                  ginger, is widely used as a spice folkmedicine.
                </p>
                <button  className="buttonGrid" type="button"onClick={handleButtonClick}>Move to top</button>
              </div>
            </section>
          </article>
          <article className="article article-5"onClick={handleArticleClick}>
            <a href="#">
              <img
                src="./images/page_home/cube2/5.jpg"
                alt=""
              />
            </a>
            <section className="description">
              <h2>Window Sill?</h2>
              <div className="details-view">
                <p>
                  Ginger is a flowering plant whose rhizome, ginger root or
                  ginger, is widely used as a spice folkmedicine.
                </p>
                <button className="buttonGrid" type="button"onClick={handleButtonClick}>Move to top</button>
              </div>
            </section>
          </article>
          <article className="article article-6"onClick={handleArticleClick}>
            <a href="#">
              <img
                src="./images/page_home/cube2/6.jpg"
                alt=""
              />
            </a>
            <section className="description">
              <h2>Window Sill?</h2>
              <div className="details-view">
                <p>
                  Ginger is a flowering plant whose rhizome, ginger root or
                  ginger, is widely used as a spice folkmedicine.
                </p>
                <button className="buttonGrid" type="button"onClick={handleButtonClick}>Move to top</button>
              </div>
            </section>
          </article>
        </div>
      </div>
    </div>
    </div>
  );
};

export default EffectPaint3;
