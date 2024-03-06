import Transition from "@/common/transition/page";
import React from "react";

export default function About() {
    return (
        <Transition>
            <div className="w-full h-screen bg-green-200 flex items-center justify-center font-mono text-6xl text-black">
                <h1>About</h1>
            </div>
        </Transition>
    )
}
