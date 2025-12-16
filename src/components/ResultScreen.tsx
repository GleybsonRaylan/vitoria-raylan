import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Heart, RotateCcw, Trophy, Star, Sparkles } from 'lucide-react';

interface ResultScreenProps {
  score: number;
  total: number;
  onRestart: () => void;
}

export const ResultScreen = ({ score, total, onRestart }: ResultScreenProps) => {
  const percentage = Math.round((score / total) * 100);

  const getMessage = () => {
    if (percentage >= 90) {
      return {
        title: "Perfeito! 😍",
        message: "Você me conhece melhor do que eu mesmo! Ainda bem que te tenho. 💖",
        emoji: "🏆",
        color: "text-success"
      };
    } else if (percentage >= 70) {
      return {
        title: "Muito bom! 💕",
        message: "Você me conhece bastante… mas ainda tem bugs pra corrigir 😄",
        emoji: "⭐",
        color: "text-primary"
      };
    } else {
      return {
        title: "Hmm... 🤔",
        message: "Vamos precisar de mais abraços pra ajustar esse sistema 😂💖",
        emoji: "💝",
        color: "text-accent"
      };
    }
  };

  const result = getMessage();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="glass rounded-3xl p-8 max-w-md w-full text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
          className="mb-6"
        >
          <span className="text-8xl">{result.emoji}</span>
        </motion.div>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className={`text-3xl font-bold mb-4 ${result.color}`}
        >
          {result.title}
        </motion.h2>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-6"
        >
          <p className="text-muted-foreground mb-4">Vitória, você me conhece em:</p>
          
          <div className="relative pt-4 pb-2">
            <div className="h-6 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: 'var(--gradient-primary)' }}
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                transition={{ delay: 0.8, duration: 1.5, ease: 'easeOut' }}
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2 }}
              className="absolute -top-2 right-0 flex items-center gap-1"
            >
              <Sparkles className="w-5 h-5 text-primary" />
            </motion.div>
          </div>

          <motion.p
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.8, type: 'spring' }}
            className="text-5xl font-bold text-gradient mt-4"
          >
            {percentage}%
          </motion.p>
        </motion.div>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-lg text-muted-foreground mb-8"
        >
          {result.message}
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="space-y-4"
        >
          <p className="text-sm text-muted-foreground">
            Você acertou <span className="text-primary font-bold">{score}</span> de {total} perguntas
          </p>

          <Button
            onClick={onRestart}
            size="lg"
            className="bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-xl btn-glow"
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            Jogar novamente 🔁
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="mt-8 text-sm text-muted-foreground"
        >
          Feito com 💖 por <span className="text-primary font-semibold">Raylan</span> para <span className="text-primary font-semibold">Vitória</span>
        </motion.p>
      </motion.div>
    </motion.div>
  );
};
