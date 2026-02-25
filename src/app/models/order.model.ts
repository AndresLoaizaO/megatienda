import { CartItem } from './cart.model';

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  totalAmount: number;
  status: 'pendiente' | 'completado';
  paymentMethod: string;
  createdAt: Date;
}