import React from 'react';
import { X } from 'lucide-react';
import { Flyer } from '../types';

interface ModalProps {
  flyer: Flyer;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ flyer, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50" onClick={onClose}>
      <div 
        className="bg-gray-900 rounded-xl max-w-2xl w-full overflow-hidden shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative">
          <img 
            src={flyer.image} 
            alt={flyer.restaurantName}
            className="w-full h-64 object-cover"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">{flyer.restaurantName}</h2>
          <p className="text-gray-300 mb-4">{flyer.description}</p>
          
          <div className="bg-white/10 rounded-lg p-4 mb-4">
            <h3 className="text-lg font-semibold text-yellow-300 mb-2">Special Offer</h3>
            <p>{flyer.specialOffer}</p>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {flyer.tags.map((tag) => (
              <span 
                key={tag}
                className="px-3 py-1 bg-white/10 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="text-lg font-semibold text-center">
            Current Ranking: {flyer.votes} votes
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;