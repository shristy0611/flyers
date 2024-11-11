import React from 'react';
import { ThumbsUp, ThumbsDown, Trophy } from 'lucide-react';
import { Flyer } from '../types';

interface FlyerCardProps {
  flyer: Flyer;
  onVote: (id: number, isUpvote: boolean) => void;
  onClick: () => void;
  rank: number;
}

const FlyerCard: React.FC<FlyerCardProps> = ({ flyer, onVote, onClick, rank }) => {
  const getRankColor = (rank: number) => {
    switch(rank) {
      case 1: return 'text-yellow-400';
      case 2: return 'text-gray-300';
      case 3: return 'text-amber-600';
      default: return 'text-gray-500';
    }
  };

  return (
    <div 
      onClick={onClick}
      className="bg-black/20 backdrop-blur-lg rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-102 cursor-pointer group flex animate-fade-in"
      style={{
        transition: 'transform 0.3s ease, opacity 0.3s ease'
      }}
    >
      <div className="relative w-32 flex-shrink-0">
        <img 
          src={flyer.image} 
          alt={flyer.restaurantName}
          className="w-full h-full object-cover group-hover:brightness-75 transition-all"
        />
        <div className="absolute top-2 left-2 flex items-center gap-1">
          <Trophy className={`${getRankColor(rank)}`} size={20} />
          <span className={`font-bold ${getRankColor(rank)}`}>#{rank}</span>
        </div>
      </div>
      
      <div className="p-3 flex-1">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-base font-bold truncate flex-1">{flyer.restaurantName}</h3>
          <span className="text-sm font-semibold ml-2">{flyer.votes} votes</span>
        </div>

        <div className="text-xs text-gray-300 mb-2 line-clamp-2">
          {flyer.specialOffer}
        </div>

        <div className="flex justify-end gap-1" onClick={e => e.stopPropagation()}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onVote(flyer.id, true);
            }}
            className="p-1 rounded-full bg-green-600/20 hover:bg-green-600/40 transition-colors"
          >
            <ThumbsUp size={14} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onVote(flyer.id, false);
            }}
            className="p-1 rounded-full bg-red-600/20 hover:bg-red-600/40 transition-colors"
          >
            <ThumbsDown size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlyerCard;