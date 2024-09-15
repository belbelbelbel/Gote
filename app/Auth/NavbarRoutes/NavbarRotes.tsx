import React from 'react';
import { navItems } from '@/app/Utils/@datacontents';
export default function NavbarrRoutes() {
  return (
    <div>
      <ul className="flex gap-8 items-center">
        {navItems.map((item, index) => (
          <li key={index} className="cursor-pointer">
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
