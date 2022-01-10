import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div class=" w-3/4 mx-auto my-6  overflow-hidden md:max-w-2xl">
      <div class="md:flex">
        <div class=" py-8 md:shrink-0">
          <iframe
            class="aspect-w-3 md:h-full"
            src="https://www.youtube.com/embed/r9jwGansp1E"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="p-8">
          <a
            href="#"
            class="block my-2 text-xl leading-tight font-semibold text-white hover:underline"
          >
            About Us
          </a>
          <p class="my-2 text-gray">
           Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
          </p>
          <Link to="/sign-up"
            className="my-2  whitespace-nowrap inline-flex items-center justify-center px-4 py-2 rounded-3xl shadow-sm text-base font-medium text-white bg-red hover:bg-red-dark"
          >
            Get started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
