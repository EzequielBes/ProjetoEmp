import { Flex } from "@chakra-ui/react";
import { Sobre } from "./compSobre/sobre";
import { useRef} from 'react'
import { useInView  } from "framer-motion";
import { Paralax } from "../../paralax";

export function Identidade() {

  const ref = useRef(null)
  const isInView = useInView(ref) 

  return(
    <Flex h='100vh' alignItems={'center'}  justifyContent={'center'} ref={ref} overflow='hidden'>
      <Paralax w='80vw' justify='flex-start'>
        <Sobre/>
      </Paralax>
    </Flex>
  )
}
