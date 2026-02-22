"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  show: boolean;
}

export function LoadingScreen({ show }: LoadingScreenProps) {
  const [visible, setVisible] = useState(show);
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    if (!show) return;

    const nameTimer = setTimeout(() => setShowName(true), 1500);
    const exitTimer = setTimeout(() => setVisible(false), 5000);

    return () => {
      clearTimeout(nameTimer);
      clearTimeout(exitTimer);
    };
  }, [show]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-white"
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <AnimatePresence>
            {showName && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="text-[clamp(2rem,4vw+1rem,4rem)] font-semibold tracking-[-0.03em] text-gray-900"
              >
                Gaby
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
