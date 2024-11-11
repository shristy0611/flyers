import React, { useState } from 'react';
import { Flyer } from './types';
import FlyerList from './components/FlyerList';

function App() {
  const [lists] = useState([
    { id: 1, title: "Fine Dining", theme: "from-rose-900 to-rose-800" },
    { id: 2, title: "Casual Dining", theme: "from-amber-900 to-amber-800" },
    { id: 3, title: "Fast Food", theme: "from-emerald-900 to-emerald-800" },
    { id: 4, title: "Cafes", theme: "from-cyan-900 to-cyan-800" },
    { id: 5, title: "Food Trucks", theme: "from-violet-900 to-violet-800" }
  ]);

  const [flyers, setFlyers] = useState<Flyer[]>([
    {
      id: 1,
      listId: 1,
      restaurantName: "La Piazza Italiana",
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1000",
      description: "Authentic Italian cuisine in the heart of the city. Our chefs bring generations of Italian cooking tradition to create an unforgettable dining experience. From hand-made pasta to wood-fired pizzas, every dish tells a story of passion and excellence.",
      votes: 45,
      specialOffer: "20% off on all pasta dishes",
      tags: ["Italian", "Fine Dining", "Pasta", "Wine Selection"]
    },
    {
      id: 2,
      listId: 2,
      restaurantName: "Sushi Master",
      image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=1000",
      description: "Premium sushi experience crafted by master chefs. Using only the freshest ingredients, we create innovative rolls while respecting traditional Japanese techniques. Our omakase menu changes daily based on the best available seafood.",
      votes: 38,
      specialOffer: "Free miso soup with any roll",
      tags: ["Japanese", "Sushi", "Fresh Fish", "Sake Bar"]
    },
    {
      id: 3,
      listId: 3,
      restaurantName: "The Grill House",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1000",
      description: "Premium steaks and grills featuring the finest cuts of meat. Our dry-aging process and custom wood-fired grill bring out exceptional flavors in every dish. Each steak is hand-selected and cooked to perfection.",
      votes: 52,
      specialOffer: "Sunday BBQ Special",
      tags: ["Steakhouse", "BBQ", "Wine Bar", "Private Dining"]
    },
    {
      id: 4,
      listId: 4,
      restaurantName: "Café Parisienne",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1000",
      description: "Authentic French café experience in a charming atmosphere. Our pastry chef creates fresh croissants and pastries daily. Enjoy traditional French breakfast and brunch items while sipping on perfectly crafted espresso drinks.",
      votes: 33,
      specialOffer: "Morning coffee & croissant combo",
      tags: ["Café", "French", "Pastries", "Breakfast"]
    },
    {
      id: 5,
      listId: 5,
      restaurantName: "Taco Truck Supreme",
      image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80&w=1000",
      description: "Authentic street tacos with a modern twist. Our recipes have been passed down through generations, featuring hand-made tortillas and slow-cooked meats. Each sauce is made fresh daily using traditional Mexican recipes.",
      votes: 41,
      specialOffer: "Taco Tuesday: 3 for $8",
      tags: ["Mexican", "Street Food", "Tacos", "Fresh Salsa"]
    }
  ]);

  const handleVote = (id: number, isUpvote: boolean) => {
    setFlyers(prevFlyers => {
      const updatedFlyers = prevFlyers.map(flyer => 
        flyer.id === id 
          ? { ...flyer, votes: flyer.votes + (isUpvote ? 1 : -1) }
          : flyer
      );
      // Sort the flyers by votes within their respective lists
      return [...updatedFlyers].sort((a, b) => {
        if (a.listId === b.listId) {
          return b.votes - a.votes;
        }
        return a.listId - b.listId;
      });
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-4xl font-bold text-center mb-2">Restaurant Rankings</h1>
      <p className="text-center mb-8 text-gray-300">Vote for your favorite restaurants! Click any card to see details.</p>
      
      <div className="max-w-4xl mx-auto space-y-6">
        {lists.map((list) => (
          <FlyerList
            key={list.id}
            title={list.title}
            theme={list.theme}
            flyers={flyers.filter(flyer => flyer.listId === list.id)}
            onVote={handleVote}
          />
        ))}
      </div>
    </div>
  );
}

export default App;