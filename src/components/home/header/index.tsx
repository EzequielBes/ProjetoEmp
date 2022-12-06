import { Flex } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import {useRef, useEffect} from 'react'


export function Header({ children }: any) {

   

  

  return (
    <Flex w='100vw' h='100px' align='center' justifyContent='center'>
      <Flex w='80vw' justifyContent='flex-end'>
        {children}
      </Flex>
    </Flex>
  );
}
