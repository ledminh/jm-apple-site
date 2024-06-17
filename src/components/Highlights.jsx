import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { watchImg, rightImg } from "../utils";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1,
      y: 0,
    });

    gsap.to(".link", {
      opacity: 1,
      y: 0,
    });
  }, []);

  return (
    <section
      id="hightlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full items-end justify-between">
          <h1 id="title" className="section-heading">
            Get the highlights.
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the film
              <img scr={watchImg} alt="watch" className="ml-2" />
            </p>
            <p className="link">
              Watch the event
              <img scr={rightImg} alt="right" className="ml-2" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
