import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ManifestoSection() {
  const imagesRef = useRef([]);

  useEffect(() => {
    const images = imagesRef.current.filter((img) => img !== null);

    images.forEach((image) => {
      gsap.from(image, {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: image,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });
  }, []);

  return (
    <div className="flex w-full text-white flex-col z-50 md:flex-row gap-x-10 bg-neutral-900 mb-20">
      <div className="flex-1 flex flex-col items-center justify-center text-center text-balance">
        <p className="mb-4">
          We believe in the power of community, collaboration, and creativity.
          Our mission is to create a space where ideas can flourish and
          innovation is nurtured. Together, we strive for a future that embraces
          diversity, encourages open dialogue, and champions the pursuit of
          knowledge. This manifesto is a declaration of our commitment to these
          values, guiding our actions and shaping our vision.
        </p>
        <p className="mb-4">
          In a world filled with challenges, we stand united in our resolve to
          make a positive impact. Our community is built on trust, respect, and
          a shared vision for a better tomorrow. We invite everyone to join us
          on this journey, as we believe that together, we can achieve
          extraordinary things.
        </p>
        <p className="mb-4">
          We believe in the power of community, collaboration, and creativity.
          Our mission is to create a space where ideas can flourish and
          innovation is nurtured. Together, we strive for a future that embraces
          diversity, encourages open dialogue, and champions the pursuit of
          knowledge. This manifesto is a declaration of our commitment to these
          values, guiding our actions and shaping our vision.
        </p>
        <p className="mb-4">
          We believe in the power of community, collaboration, and creativity.
          Our mission is to create a space where ideas can flourish and
          innovation is nurtured. Together, we strive for a future that embraces
          diversity, encourages open dialogue, and champions the pursuit of
          knowledge. This manifesto is a declaration of our commitment to these
          values, guiding our actions and shaping our vision.
        </p>
        <p className="mb-4">
          We believe in the power of community, collaboration, and creativity.
          Our mission is to create a space where ideas can flourish and
          innovation is nurtured. Together, we strive for a future that embraces
          diversity, encourages open dialogue, and champions the pursuit of
          knowledge. This manifesto is a declaration of our commitment to these
          values, guiding our actions and shaping our vision.
        </p>
      </div>
      <div className="manifesto_images w-full md:w-fit flex flex-col min-[520px]:flex-row md:flex-col items-center justify-around gap-y-10">
        <figure
          className="figure"
          ref={(el) => (imagesRef.current[0] = el)}
        >
          <img
            src="https://images.pexels.com/photos/87477/winter-snow-tree-den-87477.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Founder Image"
            width={250}
            height={300}
          />
          <figcaption>
            <h3 className="title">Founder</h3>
          </figcaption>
        </figure>
        <figure
          className="figure"
          ref={(el) => (imagesRef.current[1] = el)}
        >
          <img
            src="https://images.pexels.com/photos/87477/winter-snow-tree-den-87477.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Founder's Signature"
            width={250}
            height={300}
          />
          <figcaption>
            <h3 className="title">Signature</h3>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
