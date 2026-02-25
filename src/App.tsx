import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Info, HelpCircle } from 'lucide-react';
import { MagicRevealer } from './components/MagicRevealer';
import { TaskCard } from './components/TaskCard';
import { TASKS, Task } from './constants';

export default function App() {
  const [isRevealing, setIsRevealing] = useState(false);
  const [currentTask, setCurrentTask] = useState<Task | null>(null);
  const [showInfo, setShowInfo] = useState(false);

  const handleReveal = (task: Task) => {
    setIsRevealing(true);
    // Simulate a "drawing" time
    setTimeout(() => {
      setCurrentTask(task);
      setIsRevealing(false);
    }, 2000);
  };

  const handleDone = () => {
    setCurrentTask(null);
  };

  const handleAgain = () => {
    setCurrentTask(null);
    // Small delay before they can tap the sun again
  };

  return (
    <div className="min-h-screen bg-paper flex flex-col items-center justify-between p-6 overflow-hidden relative paper-texture">
      {/* Hand Drawn Decorations */}
      <div className="absolute top-10 left-10 -rotate-12 opacity-20 pointer-events-none">
        <svg width="100" height="100" viewBox="0 0 100 100" className="stroke-crayon-blue fill-none stroke-[3]">
          <path d="M10,90 Q50,10 90,90" />
          <circle cx="50" cy="30" r="10" />
        </svg>
      </div>
      <div className="absolute bottom-10 right-10 rotate-12 opacity-20 pointer-events-none">
        <svg width="120" height="120" viewBox="0 0 100 100" className="stroke-crayon-green fill-none stroke-[3]">
          <path d="M10,80 C30,80 30,20 50,20 C70,20 70,80 90,80" />
          <path d="M30,20 L30,40 M70,20 L70,40" />
        </svg>
      </div>

      {/* Header */}
      <header className="w-full max-w-md flex items-center justify-between z-30">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <div className="w-12 h-12 bg-crayon-yellow hand-drawn-border flex items-center justify-center shadow-[4px_4px_0_rgba(0,0,0,0.1)]">
            <span className="text-2xl">🖍️</span>
          </div>
          <div>
            <h1 className="text-3xl font-hand font-bold text-slate-800 tracking-tight">Douit</h1>
            <p className="text-xs font-hand text-crayon-red font-bold uppercase tracking-widest">One step at a time</p>
          </div>
        </motion.div>

        <div className="flex items-center gap-3">
          <button 
            onClick={() => setShowInfo(!showInfo)}
            className="p-3 rounded-full border-2 border-slate-800 hover:bg-slate-100 transition-colors"
          >
            <HelpCircle size={24} />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full flex flex-col items-center justify-center gap-12 py-12 relative">
        <AnimatePresence mode="wait">
          {!currentTask ? (
            <motion.div
              key="revealer-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="flex flex-col items-center"
            >
              <MagicRevealer 
                tasks={TASKS} 
                isRevealing={isRevealing} 
                onReveal={handleReveal} 
              />
            </motion.div>
          ) : (
            <TaskCard 
              task={currentTask} 
              onDone={handleDone} 
              onAgain={handleAgain} 
            />
          )}
        </AnimatePresence>
      </main>

      {/* Info Modal */}
      <AnimatePresence>
        {showInfo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowInfo(false)}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white hand-drawn-border p-10 max-w-lg w-full shadow-[15px_15px_0_rgba(0,0,0,0.1)] space-y-6"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-3xl font-hand font-bold text-slate-800">What is this?</h3>
                <button onClick={() => setShowInfo(false)} className="text-2xl">✕</button>
              </div>
              
              <div className="space-y-4 text-xl font-hand text-slate-600 leading-relaxed">
                <p>
                  Welcome to <span className="text-crayon-blue font-bold">Douit</span>! 
                </p>
                <p>
                  If you don't know what to do today, just tap the <span className="text-crayon-yellow font-bold">Spinning Sun</span>. 
                  It will pick a special surprise task just for you!
                </p>
                <p className="text-crayon-red font-bold underline decoration-wavy">
                  No stress, just fun!
                </p>
              </div>

              <div className="pt-6 flex justify-center">
                <button 
                  onClick={() => setShowInfo(false)}
                  className="hand-drawn-button bg-crayon-yellow text-slate-800"
                >
                  Got it!
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="w-full max-w-4xl flex justify-between items-center pb-4 z-30">
        <p className="text-crayon-blue font-hand text-lg font-bold">
          Drawn with love
        </p>
        <div className="flex gap-2">
          <div className="w-4 h-4 bg-crayon-red rounded-full" />
          <div className="w-4 h-4 bg-crayon-yellow rounded-full" />
          <div className="w-4 h-4 bg-crayon-green rounded-full" />
        </div>
      </footer>
    </div>
  );
}
