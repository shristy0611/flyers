import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ScrollButtonProps {
  direction: 'left' | 'right';
  onClick: () => void;
  className?: string;
}

const ScrollButton: React.FC<ScrollButtonProps> = ({ direction, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors ${className}`}
    >
      {direction === 'left' ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
    </button>
  );
};

export default ScrollButton;