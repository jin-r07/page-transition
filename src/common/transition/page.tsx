"use client";
import { AnimatePresence, motion } from "framer-motion";

export default function Transition({ children }: any) {
    return (
        <AnimatePresence >
            <motion.div
                key={"slide-in"}
                className="slide-in"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 1, delay: 0.4, ease: "circInOut" }}
            />
            {children}
            <motion.div
                key={"slide-out"}
                className="slide-out"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 1, delay: 0.4, ease: "circInOut" }}
            />
        </AnimatePresence>
    );
}