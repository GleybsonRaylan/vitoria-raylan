import { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { FloatingHearts } from '@/components/FloatingHearts';
import { HomeScreen } from '@/components/HomeScreen';
import { QuestionCard } from '@/components/QuestionCard';
import { FeedbackModal } from '@/components/FeedbackModal';
import { ResultScreen } from '@/components/ResultScreen';
import { ProgressBar } from '@/components/ProgressBar';
import { questions } from '@/data/questions';

type GameState = 'home' | 'playing' | 'result';

const Index = () => {
  const [gameState, setGameState] = useState<GameState>('home');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackCorrect, setFeedbackCorrect] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleStart = useCallback(() => {
    setGameState('playing');
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
  }, []);

  const handleAnswer = useCallback((isCorrect: boolean, selectedIndex: number) => {
    const question = questions[currentQuestion];
    
    setSelectedAnswer(selectedIndex);
    setFeedbackCorrect(isCorrect || question.allCorrect);
    setFeedbackMessage(
      isCorrect || question.allCorrect
        ? question.correctFeedback
        : question.wrongFeedback
    );
    
    if (isCorrect || question.allCorrect) {
      setScore((prev) => prev + 1);
    }
    
    setTimeout(() => {
      setShowFeedback(true);
    }, 500);
  }, [currentQuestion]);

  const handleNextQuestion = useCallback(() => {
    setShowFeedback(false);
    setSelectedAnswer(null);
    
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion((prev) => prev + 1);
      }, 300);
    } else {
      setTimeout(() => {
        setGameState('result');
      }, 300);
    }
  }, [currentQuestion]);

  const handleRestart = useCallback(() => {
    setGameState('home');
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <FloatingHearts />
      
      <AnimatePresence mode="wait">
        {gameState === 'home' && (
          <HomeScreen key="home" onStart={handleStart} />
        )}
        
        {gameState === 'playing' && (
          <div key="playing" className="min-h-screen flex flex-col p-4 pt-8">
            <div className="max-w-lg mx-auto w-full mb-8">
              <ProgressBar current={currentQuestion + 1} total={questions.length} />
            </div>
            
            <div className="flex-1 flex items-center">
              <QuestionCard
                question={questions[currentQuestion].question}
                options={questions[currentQuestion].options}
                onAnswer={handleAnswer}
                selectedAnswer={selectedAnswer}
              />
            </div>
            
            <FeedbackModal
              isCorrect={feedbackCorrect}
              message={feedbackMessage}
              onNext={handleNextQuestion}
              isVisible={showFeedback}
            />
          </div>
        )}
        
        {gameState === 'result' && (
          <ResultScreen
            key="result"
            score={score}
            total={questions.length}
            onRestart={handleRestart}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
