import React, { createContext } from 'react'
const SidebarContext = createContext(null);
export const UseContext = ({children}:any) => {
  return (
    <div>
        {children}
    </div>
  )
}
