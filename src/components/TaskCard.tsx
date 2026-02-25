import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Task } from '../constants';

interface TaskCardProps {
  task: Task | null;
  onDone: () => void;
  onAgain: () => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task, onDone, onAgain }) => {
  return (
    <AnimatePresence mode="wait">
      {task && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -50 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 25
          }}
          className="w-full max-w-sm p-6 bg-white hand-drawn-border shadow-[8px_8px_0_rgba(0,0,0,0.05)] flex flex-col items-center gap-6 relative overflow-hidden"
        >
          {/* Crayon Scribble Background */}
          <div className="absolute inset-0 opacity-5 pointer-events-none scribble-bg" />

          <div className="text-center space-y-4">
            <div className="inline-block px-4 py-1 bg-crayon-yellow border-2 border-slate-800 rounded-full font-hand text-lg -rotate-2">
              {task.category} fun!
            </div>
            <h2 className="text-4xl md:text-5xl font-hand font-bold text-slate-800 leading-tight">
              {task.text}
            </h2>
          </div>

          {/* Simple Stick Figure Drawing based on category */}
          <div className="w-32 h-32 flex items-center justify-center border-2 border-dashed border-slate-300 rounded-xl">
            {task.category === 'daily' ? (
              <svg viewBox="0 0 100 100" className="w-24 h-24 stroke-crayon-blue fill-none stroke-[3]">
                <path d="M20,80 L20,40 L50,10 L80,40 L80,80 Z" />
                <rect x="40" y="55" width="20" height="25" />
              </svg>
            ) : (
              <svg viewBox="0 0 100 100" className="w-24 h-24 stroke-crayon-green fill-none stroke-[3]">
                <circle cx="50" cy="30" r="20" />
                <path d="M50,50 L50,80 M30,60 L70,60 M40,95 L50,80 L60,95" />
              </svg>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <button
              onClick={onAgain}
              className="hand-drawn-button flex-1 bg-white text-crayon-red hover:bg-crayon-red hover:text-white transition-colors"
            >
              Try Another!
            </button>
            <button
              onClick={onDone}
              className="hand-drawn-button flex-1 bg-crayon-green text-white hover:brightness-110 transition-all"
            >
              I Did It!
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

