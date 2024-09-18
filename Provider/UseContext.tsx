"use client";
import React, { ReactNode, SetStateAction, createContext, useEffect, useState } from 'react';

interface DataProps {
  cart: string[];
  setCart: React.Dispatch<SetStateAction<string[]>>;
}

export const ContextApi = createContext<DataProps | null>(null);

export const UseContext = ({ children }: { children: ReactNode }) => {
  
  // Initialize cart state
  const [cart, setCart] = useState<string[]>([]);

  // Fetch the cart from localStorage when the component mounts
  useEffect(() => {
    if (globalThis?.localStorage) {
      const storedCart = globalThis.localStorage.getItem('cart');
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      }
    }
  }, []);  // Empty dependency array to only run this effect on mount
  
  // Persist cart changes to localStorage whenever `cart` changes
  useEffect(() => {
    if (globalThis?.localStorage) {
      if (cart.length > 0) {
        globalThis.localStorage.setItem('cart', JSON.stringify(cart));
      } else {
        globalThis.localStorage.removeItem('cart');
      }
    }
  }, [cart]);

  return (
    <ContextApi.Provider value={{ cart, setCart }}>
      {children}
    </ContextApi.Provider>
  );
};
