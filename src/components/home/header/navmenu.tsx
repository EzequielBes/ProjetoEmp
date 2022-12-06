import { Box, Flex, List, ListItem } from "@chakra-ui/react";
import { Link } from "react-scroll";


interface menuNavProps {
    children: string;
    title: string
}

export function MenuNav({ children, title }: menuNavProps) {

    return (
        
            <List display={'flex'} >
                <ListItem
                width={'200px'}
                display='flex'
                justifyContent={'center'}
                gap='20px'
                border={'1px solid black'}
                margin='0 2px'
                padding='5px'
                borderRadius={'full'}
                 
                 
                 bg='red'
                 color='white' 
                 cursor='pointer' 
                 fontSize='20px' 
                 transition={'all ease 0.8s'}
                 fontFamily='Orbitron'
                 
                 _hover={{
                    color: 'purple.400',
                    
                 }}
                
                 
                 >
                    <Link smooth={true} spy={true} duration={500} offset={-70} to={children}>{title}</Link>
                </ListItem>
            </List>
        
        
            
       





    )
}