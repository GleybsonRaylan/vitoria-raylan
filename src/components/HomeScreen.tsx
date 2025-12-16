import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Heart, Code, Sparkles } from 'lucide-react';

interface HomeScreenProps {
  onStart: () => void;
}

export const HomeScreen = ({ onStart }: HomeScreenProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex items-center justify-center p-4 relative"
    >
      <div className="text-center max-w-lg mx-auto relative z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="mb-8 relative inline-block"
        >
          <div className="relative">
            <Heart className="w-24 h-24 text-primary fill-primary animate-heartbeat" />
            <motion.div
              className="absolute -top-2 -right-2"
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Code className="w-8 h-8 text-accent" />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            <span className="text-gradient">Maria Vitória</span>... 🤔💻
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Será que você conhece <span className="text-primary font-semibold">MESMO</span> seu namorado programador?
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="glass rounded-2xl p-6 mb-8"
        >
          <p className="text-muted-foreground">
            Responda as perguntas sobre mim e descubra o quanto você me conhece! 
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <span className="text-2xl">💕</span>
            <span className="text-2xl">😂</span>
            <span className="text-2xl">❤️</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Button
            onClick={onStart}
            size="lg"
            className="bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 text-primary-foreground font-bold px-10 py-8 text-xl rounded-2xl btn-glow animate-pulse hover:animate-none transition-all"
          >
            <Heart className="w-6 h-6 mr-2 fill-current" />
            Vamos começar a brincadeira
            <Heart className="w-6 h-6 ml-2 fill-current" />
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 text-sm text-muted-foreground"
        >
          <Sparkles className="w-4 h-4 inline mr-1" />
          Um quiz especial feito pelo Raylan 💖
        </motion.p>
      </div>
    </motion.div>
  );
};
