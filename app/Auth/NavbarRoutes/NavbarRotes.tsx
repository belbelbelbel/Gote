"use client"
import React from 'react';
import { navItems } from '@/app/Utils/@datacontents'; 
import { usePathname } from 'next/navigation';

export default function NavbarrRoutes() {
  const location = usePathname();

  const handleActiveLocation = (itemHref: string) => {
    return location === itemHref ? 'text-black font-extrabold' : 'text-black font-medium'; 
  };

  return (
    <div>
      <ul className="flex gap-8 items-center">
        {navItems.map((item, index) => (
          <li key={index} className="cursor-pointer">
            <a 
              href={item.href} 
              className={handleActiveLocation(item.href)}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
