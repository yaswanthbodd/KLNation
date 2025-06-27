"use client";
import React, { useState } from "react";
import { MultiStepLoader as Loader } from "./ui/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";

const loadingStates = [
    {
        text: "Playing at Opening",
    },
    {
        text: "Number 3",
    },
    {
        text: "Number 4",
    },
    {
        text: "Number 5",
    },
    {
        text: "Number 6",
    },
    {
        text: "Finisher",
    },
    {
        text: "Wicketkeeper",
    },
    {
        text: "Captain",
    },
    {
        text: "Speak in Tamil",
    },
    {
        text: "Speak in kannada",
    },
    {
        text: "Speak in Hindi",
    },
    {
        text: "Speak in English",
    },
    ];

    export function ViewMore() {
    const [loading, setLoading] = useState(false);
    return (
        <>
            <div className="flex justify-center mt-10">
                <p className="text-2xl font-bold">MANY ROLES ONE KLRAHUL</p>
            </div>
            <div className="w-full h-[60vh] flex items-center justify-center">
            {/* Core Loader Modal */}
            <Loader loadingStates={loadingStates} loading={loading} duration={1000} />
            {/* The buttons are for demo only, remove it in your actual code ⬇️ */}
            <button
                onClick={() => setLoading(true)}
                className="bg-[#39C3EF] hover:bg-[#39C3EF]/90 text-black mx-auto text-sm md:text-base transition font-medium duration-200 h-10 rounded-lg px-8 flex items-center justify-center"
                style={{
                boxShadow:
                    "0px -1px 0px 0px #ffffff40 inset, 0px 1px 0px 0px #ffffff40 inset",
                }}>
                Click here to view more
            </button>
            {loading && (
                <button
                className="fixed top-4 right-4 text-black dark:text-white z-[120]"
                onClick={() => setLoading(false)}>
                <IconSquareRoundedX className="h-10 w-10" />
                </button>
            )}
            </div>
        </>
    );
    }
