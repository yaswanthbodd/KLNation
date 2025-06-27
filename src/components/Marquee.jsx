"use client";
import { ThreeDMarquee } from "../components/ui/3d-marquee";

export function Marquee() {
  const images = [
    "images/3dmarquee/pic-1.jpg",
    "images/3dmarquee/pic-2.jpg",
    "images/3dmarquee/pic-3.jpg",
    "images/3dmarquee/pic-4.jpg",
    "images/3dmarquee/pic-5.jpg",
    "images/3dmarquee/pic-6.jpg",
    "images/3dmarquee/pic-7.jpg",
    "images/3dmarquee/pic-8.jpg",
    "images/3dmarquee/pic-9.jpg",
    "images/3dmarquee/pic-10.jpg",
    "images/3dmarquee/pic-11.jpg",
    "images/3dmarquee/pic-12.jpg",
    "images/3dmarquee/pic-13.jpg",
    "images/3dmarquee/pic-14.jpg",
    "images/3dmarquee/pic-15.jpg",
    "images/3dmarquee/pic-16.jpg",
    "images/3dmarquee/pic-17.jpg",
    "images/3dmarquee/pic-18.jpg",
    "images/3dmarquee/pic-19.jpg",
    "images/3dmarquee/pic-20.jpg",
    "images/3dmarquee/pic-21.jpg",
    "images/3dmarquee/pic-22.jpg",
    "images/3dmarquee/pic-23.jpg",
    "images/3dmarquee/pic-24.jpg",
    "images/3dmarquee/pic-25.jpg",
    "images/3dmarquee/pic-26.jpg",
    "images/3dmarquee/pic-27.jpg",
    "images/3dmarquee/pic-28.jpg",
    "images/3dmarquee/pic-29.jpg",
    "images/3dmarquee/pic-30.jpg",
    "images/3dmarquee/pic-31.jpg",

    ];
    return (
        <div
        className="mx-auto my-10 max-w-7xl bg-gray-800/5 p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800">
        <ThreeDMarquee images={images} />
        </div>
    );
}
