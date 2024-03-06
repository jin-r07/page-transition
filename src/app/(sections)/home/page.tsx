import Transition from "@/common/transition/page";
import React from "react";

export default function Home() {
    return (
        <Transition>
            <div className="w-full h-screen bg-amber-200 flex items-center justify-center font-mono text-6xl text-black">
                <h1>Home</h1>
            </div>
        </Transition>
    )
}
