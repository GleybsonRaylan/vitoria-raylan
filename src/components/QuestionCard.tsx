import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Option {
  text: string;
  isCorrect: boolean;
}

interface QuestionCardProps {
  question: string;
  options: Option[];
  onAnswer: (isCorrect: boolean, selectedIndex: number) => void;
  selectedAnswer: number | null;
}

export const QuestionCard = ({
  question,
  options,
  onAnswer,
  selectedAnswer,
}: QuestionCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full max-w-lg mx-auto"
    >
      <div className="glass rounded-2xl p-6 shadow-lg">
        <h2 className="text-xl md:text-2xl font-semibold text-center mb-6 leading-relaxed">
          {question}
        </h2>
        
        <div className="space-y-3">
          {options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isAnswered = selectedAnswer !== null;

            return (
              <motion.button
                key={index}
                whileHover={{ scale: isAnswered ? 1 : 1.02 }}
                whileTap={{ scale: isAnswered ? 1 : 0.98 }}
                onClick={() => !isAnswered && onAnswer(option.isCorrect, index)}
                disabled={isAnswered}
                className={cn(
                  'w-full p-4 rounded-xl text-left font-medium transition-all duration-300',
                  'border-2',
                  !isAnswered && 'hover:border-primary hover:bg-primary/10 border-border bg-muted/50',
                  isSelected && 'border-primary bg-primary/20',
                  isAnswered && !isSelected && 'opacity-50 border-border bg-muted/50'
                )}
              >
                <span className="flex items-center gap-3">
                  <span className={cn(
                    'w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold',
                    isSelected ? 'bg-primary text-primary-foreground' : 
                    'bg-secondary/50 text-secondary-foreground'
                  )}>
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="flex-1">{option.text}</span>
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};
