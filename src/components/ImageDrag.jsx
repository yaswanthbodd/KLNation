import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "./ui/draggable-card";
import { ColourfulText } from "./ui/colourful-text";

export function ImageDrag() {
  const items = [
    {
      title: "110 vs Australia at SCG (Sydney), 6 Jan 2015",
      image: "images/drag-images/hundred-1.jpg",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "108 vs Sri Lanka at P Sara Oval, 20 Aug 2015",
      image: "images/drag-images/hundred-2.webp",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "158 vs West Indies at Sabina Park, 30 Jul 2016",
      image: "images/drag-images/hundred-3.webp",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "199 vs England at Chepauk (Chennai), 16 Dec 2016",
      image: "images/drag-images/hundred-4.jpg",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "149 vs England at The Oval, 7 Sep 2018",
      image: "images/drag-images/hundred-5.jpg",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      title: "129 vs England at Lord's, 12 Aug 2021",
      image: "images/drag-images/hundred-6.webp",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
    {
      title: "123 vs South Africa at Centurion, 26 Dec 2021",
      image: "images/drag-images/hundred-7.webp",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
    {
      title: "101 vs South Africa at Centurion, 26 Dec 2023",
      image: "images/drag-images/hundred-8.webp",
      className: "absolute top-[20%] left-[20%] rotate-[9deg]",
    },
    {
      title: "137 vs England at Headingley, 23 Jun 2025",
      image: "images/drag-images/hundred-9.jpg",
      className: "absolute top-8 left-[50%] rotate-[4deg]",
    },
  ];

  return (
    <>
      <div>
        <p className="flex justify-center mt-8 mb-4 text-xl md:text-2xl font-extrabold text-gray-300">
          Test Centuries
        </p>
      </div>

      <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
        <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-lg md:text-2xl font-black text-neutral-400 dark:text-neutral-800">
          <ColourfulText text=" KL Rahul" /> — where class meets courage in the
          purest form of the game.
        </p>

        {items.map((item) => (
          <DraggableCardBody key={item.title} className={item.className}>
            <img
              src={item.image}
              alt={item.title}
              className="pointer-events-none relative z-10 h-40 w-40 sm:h-48 sm:w-48 md:h-60 md:w-60 lg:h-80 lg:w-80 object-cover"
            />
            <h3 className="mt-4 text-center text-sm sm:text-base md:text-lg lg:text-2xl font-bold text-neutral-700 dark:text-neutral-300">
              {item.title}
            </h3>
          </DraggableCardBody>
        ))}
      </DraggableCardContainer>
    </>
  );
}
