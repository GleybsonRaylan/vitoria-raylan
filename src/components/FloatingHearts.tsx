import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Heart {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  emoji: string;
}

const emojis = ['💖', '💕', '💗', '❤️', '💘', '💝', '✨', '💫', '🌟', '{ }', '< />', '❤️‍🔥'];

export const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const newHearts: Heart[] = [];
    for (let i = 0; i < 25; i++) {
      newHearts.push({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 8 + Math.random() * 7,
        size: 16 + Math.random() * 24,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
      });
    }
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute opacity-20"
          style={{
            left: `${heart.x}%`,
            fontSize: heart.size,
          }}
          initial={{ y: '110vh' }}
          animate={{ y: '-10vh' }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {heart.emoji}
        </motion.div>
      ))}
    </div>
  );
};
