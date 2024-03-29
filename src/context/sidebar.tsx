import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import {createContext, ReactNode , useContext, useEffect} from 'react';

interface SideBarDrawerProviderProps {
  children: ReactNode;
}
type SideBarDrawerContextData = UseDisclosureReturn 

const SideBarDrawerContext = createContext({} as SideBarDrawerContextData);


export function SideBarDrawerProvider({children}:SideBarDrawerProviderProps) {
  const disclosure = useDisclosure()

  return (
    <SideBarDrawerContext.Provider value={disclosure}>
      {children}
    </SideBarDrawerContext.Provider>
  )
}
export const useSideBarDrawer = () => useContext(SideBarDrawerContext)
