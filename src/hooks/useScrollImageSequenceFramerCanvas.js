import { useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import { useCallback, useEffect, useRef } from "react";

const useScrollImageSequenceFramerCanvas = ({
  onDraw,
  keyframes,
  scrollOptions,
  springConfig = {
    damping: 50,
    stiffness: 300,
    restSpeed: 0.5,
    restDelta: 0.001,
  },
}) => {
  const canvasRef = useRef(null);
  const { scrollYProgress } = useScroll(scrollOptions);
  const progress = useSpring(scrollYProgress, springConfig);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }, []);

  const renderImage = useCallback(
    (progress) => {
      keyframes.then((frames) => {
        const constraint = (n, min = 0, max = frames.length - 1) =>
          Math.min(Math.max(n, min), max);
        onDraw(
          frames[constraint(Math.round(frames.length * progress))],
          canvasRef.current.getContext("2d")
        );
      });
    },
    [keyframes]
  );

  useEffect(() => {
    resizeCanvas();
    const resizeCanvasAndRerender = () => {
      resizeCanvas();
      renderImage(progress.get());
    };
    window.addEventListener("resize", resizeCanvasAndRerender);
    return () => {
      window.removeEventListener("resize", resizeCanvasAndRerender);
    };
  }, [progress, renderImage, resizeCanvas]);

  useEffect(() => {
    keyframes.then((frames) => {
      onDraw(frames[0], canvasRef.current.getContext("2d"));
    });
  }, [keyframes]);

  useMotionValueEvent(progress, "change", renderImage);

  return [progress, canvasRef];
};

export default useScrollImageSequenceFramerCanvas;
