import { Button } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-scroll";
import {AiFillHome} from 'react-icons/ai'


interface rowProp{
    ide: string;
}

export function Botao({ide}:rowProp) {
 

    return (
        <Link smooth={true} spy={true} duration={500} offset={-70} to = {ide}>
            <Button 
           
           h='6rem'
           w='6rem'
           border='2px double white'
           borderRadius='full'
           color='gray.300'
           bg='cyan.600'
           fontSize='2rem'
           transition='all 0.2s ease'
           _active={{
               color: 'gray.600',
               bg: 'purple.400',
               transition: 'all ease 0.2s'
               

           }}

           _hover={{
               bg: 'blue.600',
               color: 'blue.300',
               border: '2px solid purple.300',
               h: '5.3rem',
               w: '5.3rem',
               boxShadow: '1px 3px 10px black',
               fontSize: '1.5rem'
           }}
           
       >
           <AiFillHome/>
       </Button>
        </Link>
        
    )
}