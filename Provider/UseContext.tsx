"use client";
import React, { ReactNode, SetStateAction, createContext, useEffect, useState } from 'react';

interface DataProps {
  cart: string[];
  setCart: React.Dispatch<SetStateAction<string[]>>;
}

export const ContextApi = createContext<DataProps | null>(null);

export const UseContext = ({ children }: { children: ReactNode }) => {
  const getInitialCart = () => {
    if ( (window as any) !== 'undefined') {
      const storedCart = localStorage.getItem('cart');
      return storedCart ? JSON.parse(storedCart) : [];
    }
    return [];
  };

  const [cart, setCart] = useState<string[]>(getInitialCart);

  useEffect(() => {
    if (cart.length > 0) { 
      localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      localStorage.removeItem('cart'); 
    }
  }, [cart]);

  return (
    <ContextApi.Provider value={{ cart, setCart }}>
      {children}
    </ContextApi.Provider>
  );
};
