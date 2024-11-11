import React, { useState } from 'react';
import { Flyer } from '../types';
import FlyerCard from './FlyerCard';
import Modal from './Modal';

interface FlyerListProps {
  title: string;
  theme: string;
  flyers: Flyer[];
  onVote: (id: number, isUpvote: boolean) => void;
}

const FlyerList: React.FC<FlyerListProps> = ({ title, theme, flyers, onVote }) => {
  const [selectedFlyer, setSelectedFlyer] = useState<Flyer | null>(null);

  return (
    <div className={`bg-gradient-to-r ${theme} rounded-xl p-4 shadow-xl`}>
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="space-y-3">
        {flyers.map((flyer, index) => (
          <div 
            key={flyer.id}
            className="transform transition-all duration-500"
          >
            <FlyerCard
              flyer={flyer}
              onVote={onVote}
              onClick={() => setSelectedFlyer(flyer)}
              rank={index + 1}
            />
          </div>
        ))}
      </div>
      
      {selectedFlyer && (
        <Modal
          flyer={selectedFlyer}
          onClose={() => setSelectedFlyer(null)}
        />
      )}
    </div>
  );
};

export default FlyerList;