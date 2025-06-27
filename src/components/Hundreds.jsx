"use client";

import { Carousel } from "./ui/carousel";
export function Hundreds() {
    const slideData = [
        {
        title: "100* vs Zimbabwe at Harare, 11 Jun 2016 (on debut)",
        src: "images/hundreds/pic-1.jpg",
        },
        {
        title: "111 vs England at Headingley, 6 Jul 2019",
        src: "images/hundreds/pic-2.avif",
        },
        {
        title: "102 vs West Indies at Visakhapatnam, 18 Dec 2019",
        src: "images/hundreds/pic-3.webp",
        },
        {
        title: "112 vs New Zealand at Bay Oval, 11 Feb 2020",
        src: "images/hundreds/pic-4.jpeg",
        },
        {
        title: "108 vs England at Pune, 26 Mar 2021",
        src: "images/hundreds/pic-5.avif",
        },
        {
        title: "111* vs Sri Lanka at Colombo, 11 Sep 2023",
        src: "images/hundreds/pic-6.webp",
        },
        {
        title: "102 vs Netherlands at Chinnaswamy Stadium, 12 Nov 2023",
        src: "images/hundreds/pic-7.webp",
        },
        {
        title: "110* vs West Indies at Lauderhill, 27 Aug 2016",
        src: "images/hundreds/pic-8.webp",
        },
        {
        title: "101* vs England at Old Trafford, 3 Jul 2018",
        src: "images/hundreds/pic-9.jpg",
        },
    ];
    return (
        <>
            <p className="flex justify-center text-center font-bold text-2xl">Odi Hundreds and T20 Hundreds</p>
            <div className="relative overflow-hidden w-full h-full py-20">
            <Carousel slides={slideData} />
            </div>
        </>
    );
    }
