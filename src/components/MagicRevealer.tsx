import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Task } from '../constants';

interface MagicRevealerProps {
  onReveal: (task: Task) => void;
  isRevealing: boolean;
  tasks: Task[];
}

export const MagicRevealer: React.FC<MagicRevealerProps> = ({ onReveal, isRevealing, tasks }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleReveal = () => {
    if (isRevealing) return;
    
    const randomIndex = Math.floor(Math.random() * tasks.length);
    const selectedTask = tasks[randomIndex];
    
    onReveal(selectedTask);
  };

  return (
    <div className="relative w-full max-w-xs flex flex-col items-center justify-center gap-6">
      {/* The Spinning Sun */}
      <motion.div
        animate={isRevealing ? { 
          rotate: 720,
          scale: [1, 1.1, 1],
        } : { 
          rotate: isHovered ? [0, 5, -5, 0] : 0 
        }}
        transition={{ 
          duration: isRevealing ? 1.5 : 2, 
          ease: isRevealing ? "easeInOut" : "linear",
          repeat: isRevealing ? 0 : Infinity 
        }}
        onClick={handleReveal}
        className="relative cursor-pointer group z-20"
      >
        {/* Sun Body */}
        <div className="w-36 h-36 bg-crayon-yellow rounded-full border-4 border-slate-800 shadow-[6px_6px_0_rgba(0,0,0,0.1)] flex items-center justify-center relative z-10 overflow-hidden">
          <div className="flex flex-col items-center">
            {/* Eyes */}
            <div className="flex gap-4 mb-1">
              <div className="w-3 h-3 bg-slate-800 rounded-full" />
              <div className="w-3 h-3 bg-slate-800 rounded-full" />
            </div>
            
            {/* SPIN Text */}
            <div className="font-hand text-2xl font-black text-slate-800 tracking-tighter">
              SPIN
            </div>

            {/* Smile */}
            <div className="w-10 h-5 border-b-4 border-slate-800 rounded-full mt-1" />
          </div>
        </div>

        {/* Sun Rays */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 w-24 h-3 bg-crayon-yellow border-2 border-slate-800 rounded-full origin-left"
            style={{
              transform: `translate(0, -50%) rotate(${i * 30}deg) translateX(60px)`,
              borderRadius: '50% 20% 50% 20%'
            }}
          />
        ))}
      </motion.div>

      {/* Interactive Scribble Area */}
      <div className="w-full h-16 flex items-center justify-center">
        <AnimatePresence>
          {isRevealing && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-3xl font-hand font-bold text-crayon-blue animate-wiggle"
            >
              Spinning...
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
