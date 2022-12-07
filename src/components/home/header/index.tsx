import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, useBreakpointValue } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import {useRef, useEffect} from 'react'
import { useSideBarDrawer } from "../../../context/sidebar";


export function Header({ children }: any) {

  const {isOpen, onClose} = useSideBarDrawer()   

  const isDrawerSideBar = useBreakpointValue({
    base: true,
    lg: false,
  })
  if(isDrawerSideBar){
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg='black' p='4'>
            <DrawerCloseButton mt='6'/>
            <DrawerHeader>Navegação</DrawerHeader>
            <DrawerBody>
              {children}
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }

  return (
    <Flex w='100vw' h='100px' align='center' justifyContent='center'>
      <Flex w='80vw' justifyContent='flex-end'>
        {children}
      </Flex>
    </Flex>
  );
}
