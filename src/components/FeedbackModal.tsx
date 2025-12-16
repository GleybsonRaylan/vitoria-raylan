import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart, HeartCrack } from "lucide-react";

interface FeedbackModalProps {
  isCorrect: boolean;
  message: string;
  onNext: () => void;
  isVisible: boolean;
}

// Placeholder images - you can replace these URLs with your own photos
const CORRECT_IMAGE = "/certo.jpg";
const WRONG_IMAGE = "/errado.jpg";

export const FeedbackModal = ({
  isCorrect,
  message,
  onNext,
  isVisible,
}: FeedbackModalProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className={`
              glass rounded-3xl p-6 max-w-sm w-full text-center
              border-2 ${isCorrect ? "border-success" : "border-destructive"}
            `}
          >
            {/* Image */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mb-4 relative"
            >
              <div className="relative inline-block">
                <img
                  src={isCorrect ? CORRECT_IMAGE : WRONG_IMAGE}
                  alt={isCorrect ? "Raylan sorrindo" : "Raylan bravo"}
                  className="w-32 h-32 rounded-full object-cover mx-auto border-4 shadow-lg"
                  style={{
                    borderColor: isCorrect
                      ? "hsl(var(--success))"
                      : "hsl(var(--destructive))",
                  }}
                />
                {isCorrect ? (
                  <>
                    <motion.div
                      className="absolute -top-2 -right-2"
                      initial={{ scale: 0, rotate: -20 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <Heart className="w-8 h-8 text-primary fill-primary animate-heartbeat" />
                    </motion.div>
                    <motion.div
                      className="absolute -bottom-1 -left-2"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <span className="text-2xl">✨</span>
                    </motion.div>
                  </>
                ) : (
                  <motion.div
                    className="absolute -top-2 -right-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <span className="text-3xl">😤</span>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Title */}
            <motion.h3
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className={`text-xl font-bold mb-3 ${
                isCorrect ? "text-success" : "text-destructive"
              }`}
            >
              {isCorrect ? "Acertou! 💖" : "Errou! 😂"}
            </motion.h3>

            {/* Message */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-base text-muted-foreground mb-6"
            >
              {message}
            </motion.p>

            {/* Button */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                onClick={onNext}
                size="lg"
                className="bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 text-primary-foreground font-semibold px-6 py-5 text-base rounded-xl btn-glow w-full"
              >
                Próxima pergunta ➜
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
