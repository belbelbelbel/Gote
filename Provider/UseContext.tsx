"use client";
import React, { ReactNode, SetStateAction, createContext, useEffect, useState } from 'react';

interface DataProps {
  cart: string[];
  setCart: React.Dispatch<SetStateAction<string[]>>;
}

export const ContextApi = createContext<DataProps | null>(null);

export const UseContext = ({ children }: { children: ReactNode }) => {
  

  const [cart, setCart] = useState<string[]>([]);


  useEffect(() => {
    if (globalThis?.localStorage) {
      const storedCart = globalThis.localStorage.getItem('cart');
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      }
    }
  }, []);  
  
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
