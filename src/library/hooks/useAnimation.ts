import {useEffect, useState} from "react";

/**
 const animation1 = useAnimation("elastic", 600, 0);
 const animation2 = useAnimation("elastic", 600, 150);
 const animation3 = useAnimation("elastic", 600, 300);
 * @param easingName
 * @param duration
 * @param delay
 */
export const useAnimation = (easingName: "linear" | "elastic" | "inExpo" = "linear", duration: number = 500, delay: number = 0) => {
    const elapsed = useAnimationTimer(duration, delay);
    const n = Math.min(1, elapsed / duration);
    // @ts-ignore
    return easing[easingName](n);
};

export const easing = {
    linear: (n: number) => n,
    elastic: (n: number) => n * (33 * n * n * n * n - 106 * n * n * n + 126 * n * n - 67 * n + 15),
    inExpo: (n: number) => Math.pow(2, 10 * (n - 1)),
};

export function useAnimationTimer(duration = 1000, delay = 0) {
    const [elapsed, setTime] = useState(0);
    useEffect(() => {
            let animationFrame: number;
            let timerStop: NodeJS.Timeout;
            let start: number;

            function onFrame() {
                setTime(Date.now() - start);
                loop();
            }

            function loop() {
                animationFrame = requestAnimationFrame(onFrame);
            }

            function onStart() {
                timerStop = setTimeout(() => {
                    cancelAnimationFrame(animationFrame);
                    setTime(Date.now() - start);
                }, duration);
                // Start the loop
                start = Date.now();
                loop();
            }

            const timerDelay = setTimeout(onStart, delay);
            return () => {
                clearTimeout(timerStop);
                clearTimeout(timerDelay);
                cancelAnimationFrame(animationFrame);
            };
        },
        [duration, delay]
    );
    return elapsed;
}