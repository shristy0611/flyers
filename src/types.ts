export interface Flyer {
  id: number;
  listId: number;
  restaurantName: string;
  image: string;
  description: string;
  votes: number;
  specialOffer: string;
  tags: string[];
}