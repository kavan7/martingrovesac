"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";
import { GiBearHead } from "react-icons/gi";
export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 2,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");
  
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration,
        delay: stagger(0.6),
      }
    );
  }, [scope.current, animate, duration, filter]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          // Apply black color only to the second word (index 1)
          const isSecondWord = idx === 1;
          return (
            <motion.span
              key={idx} // Unique key based on index
              className={`text-neutral-300 flex flex-row opacity-0 ${isSecondWord ? 'text-[#eb5e34]' : 'text-[#eb5e34]'}`} // Conditionally apply class
              style={{
                filter: filter ? 'blur(10px)' : 'none',
              }}
            >
              {<GiBearHead className="mt-4 mx-5"/>}{"M"}{"A"}{"R"}{"T"}{"I"}{"N"}{"G"}{"R"}{"O"}{"V"}{"E"} {"S"}{"A"}{"C"}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="text-black flex flex-row text-7xl leading-snug tracking-tight">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
