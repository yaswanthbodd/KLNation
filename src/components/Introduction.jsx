"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { ColourfulText } from "./ui/colourful-text";
import {TextGenerateEffect} from "./ui/text-generate-effect"
import {Button} from './ui/moving-border'

const words = `With the calm of a monk and the strike of a storm, KL Rahul doesn’t just play cricket — he paints poetry on the pitch.`

export function Introduction() {
    return (
        <div
        className="h-[40rem] w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Welcome to <br/> <ColourfulText text="KL Nation"/>
            </h1>
            <p></p>
            <div
                className="text-neutral-300 max-w-lg mx-auto my-2 text-sm text-center relative z-10"
                >
                <TextGenerateEffect words={words}/>
            </div>
            <div className="flex justify-center mt-4">
                <Button className=''>Scroll for more</Button>   
            </div>
        </div>
        <BackgroundBeams />
        </div>
    );
    }
